<template>
  <v-app>
    <v-main>
      <span>同じ縦横サイズの画像が前提です。</span>
      <br />
      <span>見える画像の白部分に、見えない画像を表示します。</span>
      <br />
      <span>見える画像の白部分がない場合は、見えない画像は表示されません。</span>
      <br />

      <span>見える画像：</span>
      <v-btn icon @click="opneFile(1)">
        <v-icon x-large>mdi-upload</v-icon>
      </v-btn>

      <br />

      <span>見えない画像：</span>
      <v-btn icon @click="opneFile(2)">
        <v-icon x-large>mdi-upload</v-icon>
      </v-btn>

      <br />

      <span>ダウンロード：</span>
      <v-btn icon @click="download">
        <v-icon x-large>mdi-download</v-icon>
      </v-btn>

      <div style="background-color: gray">
        <span style="color:white;font-weight:bold;">見えるときのサンプル</span>
        <br />
        <canvas id="canvas" height="1024" width="1024"></canvas>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {
  target = 0;
  width = 0;
  height = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data1!: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data2!: any;

  /**
   * ファイルダイアログを開く
   */
  private opneFile(target: number) {
    this.target = target;
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.addEventListener("change", this.addFile, false);
    input.click();
  }

  /**
   * ファイル追加
   * @param {Event} event  Event
   */
  private addFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    for (const file of files) {
      console.log(file);

      // 画像ファイルチェック
      if (file.type.match("image.*")) {
        this.addImageFile(file);
      }
    }
  }

  /**
   * 画像追加
   * @param {File} file  File
   */
  private addImageFile(file: File) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("CanvasRenderingContext2D unsupported.");
      return;
    }

    // ファイル読込
    const reader = new FileReader();
    reader.onload = () => {
      // 読込
      const result = reader.result;
      if (!result) {
        alert("FileReader failed.");
        return;
      }

      // 画像表示
      const image = new Image();
      image.src = result as string;
      image.onload = () => {
        // 画像貼付
        this.width = image.width;
        this.height = image.height;
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        //const pixel = imageData.data;

        if (this.target === 1) {
          this.data1 = imageData;
        } else {
          this.data2 = imageData;
        }
      };
    };
    reader.readAsDataURL(file);
  }

  /**
   * ダウンロード
   */
  private download() {
    // Canvas取得
    const canvas = document.getElementById("canvas") as HTMLCanvasElement; //document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("CanvasRenderingContext2D unsupported.");
      return;
    }
    canvas.width = this.width;
    canvas.height = this.height;

    const pixel1 = (this.data1 as ImageData).data;
    const pixel2 = (this.data2 as ImageData).data;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixel = imageData.data;

    for (let i = 0, n = pixel.length; i < n; i += 4) {
      if (pixel1[i + 0] != 255) {
        const grayscale =
          pixel1[i] * 0.3 + pixel1[i + 1] * 0.59 + pixel1[i + 2] * 0.11;
        pixel[i] = grayscale; // 赤
        pixel[i + 1] = grayscale; // 緑
        pixel[i + 2] = grayscale; // 青
        pixel[i + 3] = 255 - grayscale; // アルファ
      } else {
        const grayscale =
          pixel2[i] * 0.3 + pixel2[i + 1] * 0.59 + pixel2[i + 2] * 0.11;
        pixel[i] = 255; // 赤
        pixel[i + 1] = 255; // 緑
        pixel[i + 2] = 255; // 青
        pixel[i + 3] = grayscale; // アルファ
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);

    // BlobオブジェクトにアクセスできるURLを生成
    const base64 = canvas.toDataURL("image/png");
    // Base64からバイナリへ変換
    const bin = atob(base64.replace(/^.*,/, ""));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }

    // Blobを作成
    const blob = new Blob([buffer.buffer], {
      type: "image/png",
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "monotrick.png";
    link.click();
  }
}
</script>
