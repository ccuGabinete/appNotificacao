import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as imagens from '../../services/imagens';
import { Observable, Observer } from 'rxjs';
import { Notificado } from '../../models/notificado/notificado';
const act = 4;
const aux = 190;
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  imageData = imagens.body.logo;
  imageText = imagens.body.texto;
  IMAGEbODY =   imagens.body.body;
  base64Image: string;

  constructor() { }

  downloadPDF(notificado: Notificado) {

    // tslint:disable-next-line: prefer-const

    this.getBase64ImageFromURL(notificado.qrcode).subscribe(base64data => {
      this.base64Image = 'data:image/jpg;base64,' + base64data;

      // tslint:disable-next-line: prefer-const
      let coord = {

        text25: {
          texto: notificado.notificacao,
          x: 106,
          y: 51
        },

        text26: {
          texto: notificado.nome,
          x: 57,
          y: 60.90
        },

        text27: {
          texto: notificado.endereco + ' , ' + notificado.numero,
          x: 63,
          y: 67.90
        },

        text28: {
          texto: notificado.complemento,
          x: 70,
          y: 74.90
        },

        text29: {
          texto: notificado.bairro,
          x: 59,
          y: 81.90
        },

        text30: {
          texto: notificado.cep,
          x: 52,
          y: 88.90
        },


        text34: {
          texto: notificado.nome,
          x: 22.024 + act,
          y: 49 + aux
        },

        text35: {
          texto: notificado.endereco + ' ,' + notificado.numero + ' - ' + notificado.complemento,
          x: 22.024 + act,
          y: 59 + aux
        },

        text36: {
          texto: notificado.cep,
          x: 22.024 + act,
          y: 67.89 + aux
        },

        text37: {
          texto: notificado.bairro,
          x: 59.88 + act,
          y: 67.89 + aux
        },

        text38: {
          texto: notificado.municipio,
          x: 128 + act,
          y: 67.89 + aux
        },

        text39: {
          texto: notificado.infracao,
          x: 34.71,
          y: 134.02
        },

        text40: {
          texto: notificado.data,
          x: 73.76,
          y: 134.02
        },

        text41: {
          texto: notificado.dataTexto,
          x: 67.22,
          y: 176.4
        },

        text42: {
          texto: "acesse pelo qrcode",
          x: 162.5,
          y: 196
        },

        qrcode: {
          x: 167.5,
          y: 180.50,
          w: 13,
          h: 13
        },

        imageData: {
          x: 5,
          y: 5,
          w: 200,
          h: 285.062
        },

      };

      const doc = new jsPDF({
        orientaion: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      doc.setFontSize(12);
      doc.setFont('times', 'normal');
      doc.setProperties({
        title: 'Auto de Infração nº' + notificado.infracao,
        subject: 'Notificação do(a) Sr(a)' + notificado.nome,
        author: notificado.agenterespcadastro,
        keywords: ' ',
        creator: 'Coordenadoria de Controle Urbano'

      });

      //#region
     
      doc.setFontStyle('bold');
    
      doc.setFontStyle('normal');
      doc.setFontSize(8);
     
      doc.setFontStyle('bold');
      // tslint:disable-next-line: max-line-length

      doc.setFontSize(22);
      doc.setFontStyle('bold');
      doc.setFontSize(18);
      doc.text(coord.text25.texto, coord.text25.x, coord.text25.y);
      doc.setFontSize(8);
      doc.text(coord.text26.texto, coord.text26.x, coord.text26.y);
      doc.text(coord.text27.texto, coord.text27.x, coord.text27.y);
      doc.text(coord.text28.texto, coord.text28.x, coord.text28.y);
      doc.text(coord.text29.texto, coord.text29.x, coord.text29.y);
      doc.text(coord.text30.texto, coord.text30.x, coord.text30.y);
      doc.text(coord.text34.texto, coord.text34.x, coord.text34.y);
      doc.text(coord.text35.texto, coord.text35.x, coord.text35.y);
      doc.text(coord.text36.texto, coord.text36.x, coord.text36.y);
      doc.text(coord.text37.texto, coord.text37.x, coord.text37.y);
      doc.text(coord.text38.texto, coord.text38.x, coord.text38.y);
      doc.text(coord.text42.texto, coord.text42.x, coord.text42.y);
      doc.setFontStyle('bold');
      doc.setFontSize(6);
      doc.setFontSize(12);
      doc.text(coord.text39.texto, coord.text39.x, coord.text39.y);
      doc.text(coord.text40.texto, coord.text40.x, coord.text40.y);
      doc.text(coord.text41.texto, coord.text41.x, coord.text41.y);
      doc.addImage(this.base64Image, "PNG", coord.qrcode.x, coord.qrcode.y, coord.qrcode.w, coord.qrcode.h);
      doc.addImage(this.IMAGEbODY, "PNG", coord.imageData.x, coord.imageData.y, coord.imageData.w, coord.imageData.h)
      //#endregion


      doc.save('Auto nº ' + notificado.infracao);

    });

  }

  getDataExtenso(data: string) {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'dezembro'
    ];

    // tslint:disable-next-line: prefer-const
    let mes = data.substring(3, 5);
    // tslint:disable-next-line: radix
    return data.substring(0, 2) + ' de ' + meses[parseInt(mes) - 1] + ' de ' + data.substring(6);
  }

  getBase64Image(img: HTMLImageElement) {
    // tslint:disable-next-line: prefer-const
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    // This will draw image
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  getBase64ImageFromURL(url: string) {
    // tslint:disable-next-line: deprecation
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      // tslint:disable-next-line: prefer-const
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }
}
