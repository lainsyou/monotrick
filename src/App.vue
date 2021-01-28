<template>
  <v-app>
    <v-main>
      <span>同じ縦横サイズの画像が前提です。</span>
      <br />
      <span>見える画像の透過部分に、見えない画像を表示します。</span>
      <br />
      <span
        >見える画像の透過部分がない場合は、見えない画像は表示されません。</span
      >
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

      <span>ダウンロード</span>
      <br /><span style="padding-left: 10px">クレースケール：</span>
      <v-btn icon @click="create(true, false)">
        <v-icon x-large>mdi-auto-fix</v-icon>
      </v-btn>
      <br /><span style="padding-left: 10px">不透明部分の色を残す：</span>
      <v-btn icon @click="create(false, false)">
        <v-icon x-large>mdi-auto-fix</v-icon>
      </v-btn>
      <br /><span style="padding-left: 10px">クレースケール（排他）：</span>
      <v-btn icon @click="create(true, true)">
        <v-icon x-large>mdi-auto-fix</v-icon>
      </v-btn>

      <div id="background" style="background-color: gray">
        <v-btn @click="setBackground('white')">白背景 </v-btn>
        <v-btn @click="setBackground('black')">黒背景 </v-btn>
        <v-btn @click="download">ダウンロード</v-btn>
        <span style="color: white; font-weight: bold; color: gray"
          >見えるときのサンプル</span
        >
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

  private setBackground(color: string) {
    const back = document.getElementById("background") as HTMLDivElement;
    back.style.backgroundColor = color;
  }
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
   * 作成
   */
  private create(isGrayscale: boolean, isExclude: boolean) {
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
      if (isExclude) {
        if (
          pixel1[i + 3] == 0 ||
          pixel1[i + 0] + pixel1[i + 1] + pixel1[i + 2] == 0
        ) {
          if (pixel2[i + 0] + pixel2[i + 1] + pixel2[i + 2] == 255 * 3) {
            // 真っ白は真っ黒に変更
            pixel[i] = 255; // 赤
            pixel[i + 1] = 255; // 緑
            pixel[i + 2] = 255; // 青
            pixel[i + 3] = 0; // アルファ
          } else {
            const grayscale =
              pixel2[i] * 0.3 + pixel2[i + 1] * 0.59 + pixel2[i + 2] * 0.11;
            pixel[i] = 255; // 赤
            pixel[i + 1] = 255; // 緑
            pixel[i + 2] = 255; // 青
            pixel[i + 3] = grayscale; // アルファ
          }
        } else {
          const grayscale =
            pixel1[i] * 0.3 + pixel1[i + 1] * 0.59 + pixel1[i + 2] * 0.11;
          pixel[i] = 0; // 赤
          pixel[i + 1] = 0; // 緑
          pixel[i + 2] = 0; // 青
          pixel[i + 3] = 255 - grayscale; // アルファ
        }
      } else {
        if (
          pixel1[i + 3] == 0 ||
          pixel1[i + 0] + pixel1[i + 1] + pixel1[i + 2] == 0
        ) {
          if (pixel2[i + 0] + pixel2[i + 1] + pixel2[i + 2] == 0) {
            // 真っ黒は真っ白に変更
            pixel[i] = 255; // 赤
            pixel[i + 1] = 255; // 緑
            pixel[i + 2] = 255; // 青
            pixel[i + 3] = 255; // アルファ
          } else {
            const grayscale =
              pixel2[i] * 0.3 + pixel2[i + 1] * 0.59 + pixel2[i + 2] * 0.11;
            pixel[i] = 255; // 赤
            pixel[i + 1] = 255; // 緑
            pixel[i + 2] = 255; // 青
            pixel[i + 3] = grayscale; // アルファ
          }
        } else {
          const grayscale =
            pixel1[i] * 0.3 + pixel1[i + 1] * 0.59 + pixel1[i + 2] * 0.11;
          pixel[i + 0] = isGrayscale ? grayscale : pixel1[i + 0]; // 赤
          pixel[i + 1] = isGrayscale ? grayscale : pixel1[i + 1]; // 緑
          pixel[i + 2] = isGrayscale ? grayscale : pixel1[i + 2]; // 青
          pixel[i + 3] = isGrayscale ? 255 : pixel1[i + 3]; // アルファ
        }
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);
  }

  /**
   * ダウンロード
   */
  private download() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement; //document.createElement("canvas");

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
    link.target = "_blank";
    link.click();
  }
}
</script>
