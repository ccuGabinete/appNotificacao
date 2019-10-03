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
  imageData = imagens.logo;
  imageText = imagens.texto;
  base64Image: string;

  constructor() { }

  downloadPDF(notificado: Notificado) {

    // tslint:disable-next-line: prefer-const

    this.getBase64ImageFromURL(notificado.qrcode).subscribe(base64data => {
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      // tslint:disable-next-line: prefer-const
      let coord = {
        mainbox: {
          x: 21 + act,
          y: 20 + aux,
          w: 159.40,
          h: 80.06
        },

        col1: {
          px1: 135.173 + act,
          py1: 20 + aux,
          px2: 135.173 + act,
          py2: 41.82 + aux
        },

        lin1: {
          px1: 21 + act,
          py1: 34.89 + aux,
          px2: 135.173 + act,
          py2: 34.89 + aux
        },

        lin2: {
          px1: 21 + act,
          py1: 41.82 + aux,
          px2: 180.038 + act,
          py2: 41.82 + aux
        },

        col2: {
          px1: 59.247 + act,
          py1: 35.34 + aux,
          px2: 59.247 + act,
          py2: 41.82 + aux
        },

        col3: {
          px1: 97.507 + act,
          py1: 35.34 + aux,
          px2: 97.507 + act,
          py2: 41.82 + aux
        },

        lin3: {
          px1: 21 + act,
          py1: 50.46 + aux,
          px2: 180.038 + act,
          py2: 50.46 + aux
        },

        lin4: {
          px1: 21 + act,
          py1: 60.10 + aux,
          px2: 180.038 + act,
          py2: 60.10 + aux
        },

        lin5: {
          px1: 21 + act,
          py1: 68.92 + aux,
          px2: 180.038 + act,
          py2: 68.92 + aux
        },

        col4: {
          px1: 59.247 + act,
          py1: 69.27 + aux,
          px2: 59.247 + act,
          py2: 60.16 + aux
        },

        col5: {
          px1: 127.192 + act,
          py1: 69.27 + aux,
          px2: 127.192 + act,
          py2: 60.16 + aux
        },

        lin6: {
          px1: 21 + act,
          py1: 86.55 + aux,
          px2: 180.038 + act,
          py2: 86.55 + aux
        },

        lin7: {
          px1: 21 + act,
          py1: 93.14 + aux,
          px2: 180.038 + act,
          py2: 93.14 + aux
        },

        col6: {
          px1: 61.889 + act,
          py1: 86.55 + aux,
          px2: 61.889 + act,
          py2: 99.62 + aux
        },

        col7: {
          px1: 120.76 + act,
          py1: 86.55 + aux,
          px2: 120.76 + act,
          py2: 99.62 + aux
        },

        ret1: {
          x: 22.024 + act,
          y: 73 + aux,
          w: 2.5,
          h: 2.5
        },

        ret2: {
          x: 47.351 + act,
          y: 73 + aux,
          w: 2.5,
          h: 2.5
        },

        ret3: {
          x: 82.038 + act,
          y: 73 + aux,
          w: 2.5,
          h: 2.5
        },

        ret4: {
          x: 129.796 + act,
          y: 73 + aux,
          w: 2.5,
          h: 2.5
        },

        ret5: {
          x: 22.024 + act,
          y: 81 + aux,
          w: 2.5,
          h: 2.5
        },

        ret6: {
          x: 47.351 + act,
          y: 81 + aux,
          w: 2.5,
          h: 2.5
        },

        ret7: {
          x: 82.038 + act,
          y: 81 + aux,
          w: 2.5,
          h: 2.5
        },

        ret8: {
          x: 129.796 + act,
          y: 81 + aux,
          w: 2.5,
          h: 2.5
        },

        text1: {
          texto: 'Secretaria Municipal de Fazenda',
          x: 22.024 + act,
          y: 24 + aux
        },

        text2: {
          texto: 'Coordenadoria de Controle Urbano',
          x: 22.024 + act,
          y: 29 + aux
        },

        text3: {
          texto: 'Rua Ministro Hélio Beltrão 50',
          x: 22.024 + act,
          y: 34 + aux
        },

        text4: {
          texto: 'CEP: 20211-240',
          x: 25 + act,
          y: 39.70 + aux
        },

        text5: {
          texto: 'CIDADE NOVA',
          x: 63.47 + act,
          y: 39.70 + aux
        },

        text6: {
          texto: 'RIO DE JANEIRO',
          x: 99.4 + act,
          y: 39.70 + aux
        },

        text7: {
          texto: 'Nome/Razão Social',
          x: 22.024 + act,
          y: 45 + aux
        },

        text8: {
          texto: 'Endereço',
          x: 22.024 + act,
          y: 53.51 + aux
        },

        text9: {
          texto: 'CEP:',
          x: 22.024 + act,
          y: 63.39 + aux
        },

        text10: {
          texto: 'BAIRRO:',
          x: 59.88 + act,
          y: 63.39 + aux
        },

        text11: {
          texto: 'CIDADE/UF:',
          x: 128 + act,
          y: 63.39 + aux
        },

        textRet1: {
          texto: 'MUDOU-SE',
          x: 26.024 + act,
          y: 75 + aux
        },

        textRet2: {
          texto: 'DESCONHECIDO',
          x: 51.351 + act,
          y: 75 + aux
        },

        textRet3: {
          texto: 'RECUSADO',
          x: 86.038 + act,
          y: 75 + aux
        },

        textRet4: {
          texto: 'AUSENTE',
          x: 133.796 + act,
          y: 75 + aux
        },

        textRet5: {
          texto: 'FALECIDO',
          x: 26.024 + act,
          y: 83 + aux,

        },

        textRet6: {
          texto: 'NÃO PROCURADO',
          x: 51.351 + act,
          y: 83 + aux,

        },

        textRet7: {
          texto: 'ENDEREÇO INSUFICIENTE',
          x: 86.038 + act,
          y: 83 + aux

        },

        textRet8: {
          texto: 'NÃO EXISTE O NR INDICADO',
          x: 133.796 + act,
          y: 83 + aux
        },

        text12: {
          texto: 'Data:',
          x: 22.024 + act,
          y: 90.10 + aux
        },

        text13: {
          texto: 'Assinatura do Funcionário:',
          x: 62.70 + act,
          y: 90.10 + aux
        },

        text14: {
          texto: 'Assinatura do Recebedor:',
          x: 121.47 + act,
          y: 90.10 + aux
        },

        text15: {
          texto: 'Carta número:',
          x: 22.024 + act,
          y: 96.42 + aux
        },

        text16: {
          texto: 'Inscrição Estadual:',
          x: 62.70 + act,
          y: 96.42 + aux
        },

        text17: {
          texto: 'Nome/Razão Social:',
          x: 121.47 + act,
          y: 96.42 + aux
        },

        elipse: {
          x: 157.786 + act,
          y: 30.94 + aux,
          rx: 16.095,
          ry: 10.1975
        },

        triangle: {
          x1: 157.825 + act,
          y1: 21.17 + aux,
          x2: 150.89 + act,
          y2: 30.94 + aux,
          x3: 164.76 + act,
          y3: 30.94 + aux
        },

        text18: {
          texto: 'C E',
          x: 155.318 + act,
          y: 27.68 + aux
        },

        logo: {
          x: 25 + act,
          y: 5,
          w: 150,
          h: 25
        },

        linhaCorteSeloInicio: {
          px1: 5,
          py1: 198,
          px2: 10,
          py2: 198
        },

        linhaCorteSeloFim: {
          px1: 200,
          py1: 198,
          px2: 205,
          py2: 198
        },

        linhaCorteDobraInicio: {
          px1: 5,
          py1: 110,
          px2: 10,
          py2: 110
        },

        linhaCorteDobraFim: {
          px1: 200,
          py1: 110,
          px2: 205,
          py2: 110
        },

        text19: {
          texto: 'NOME:',
          x: 44.992,
          y: 60.90
        },

        text20: {
          texto: 'ENDEREÇO:',
          x: 44.992,
          y: 67.90
        },

        text21: {
          texto: 'COMPLEMENTO:',
          x: 44.992,
          y: 74.90
        },

        text22: {
          texto: 'BAIRRO:',
          x: 44.992,
          y: 81.90
        },

        text23: {
          texto: 'CEP:',
          x: 44.992,
          y: 88.90
        },

        text24: {
          texto: 'NOTIFICAÇÃO',
          x: 86.09,
          y: 44.54
        },

        text25: {
          texto: notificado.notificacao,
          x: 104,
          y: 51
        },

        imageText: {
          x: 25,
          y: 116,
          w: 160,
          h: 80
        },

        text26: {
          texto: notificado.nome,
          x: 57,
          y: 60.90
        },

        text27: {
          texto: notificado.endereco + ' ,' + notificado.numero,
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

        text31: {
          texto: '9912276014/2011/DR/RJ',
          x: 150.41,
          y: 223.35
        },

        text32: {
          texto: 'SMF',
          x: 159.649,
          y: 226.17
        },

        text33: {
          texto: 'CORREIOS',
          x: 154.6,
          y: 229.29
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

        qrcode: {
          x: 119.173 + act,
          y: 21 + aux,
          w: 13,
          h: 13
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
      doc.rect(coord.mainbox.x, coord.mainbox.y, coord.mainbox.w, coord.mainbox.h);
      doc.line(coord.col1.px1, coord.col1.py1, coord.col1.px2, coord.col1.py2);
      doc.line(coord.lin1.px1, coord.lin1.py1, coord.lin1.px2, coord.lin1.py2);
      doc.line(coord.lin2.px1, coord.lin2.py1, coord.lin2.px2, coord.lin2.py2);
      doc.line(coord.col2.px1, coord.col2.py1, coord.col2.px2, coord.col2.py2);
      doc.line(coord.col3.px1, coord.col3.py1, coord.col3.px2, coord.col3.py2);
      doc.line(coord.lin3.px1, coord.lin3.py1, coord.lin3.px2, coord.lin3.py2);
      doc.line(coord.lin4.px1, coord.lin4.py1, coord.lin4.px2, coord.lin4.py2);
      doc.line(coord.lin5.px1, coord.lin5.py1, coord.lin5.px2, coord.lin5.py2);
      doc.line(coord.col4.px1, coord.col4.py1, coord.col4.px2, coord.col4.py2);
      doc.line(coord.lin6.px1, coord.lin6.py1, coord.lin6.px2, coord.lin6.py2);
      doc.line(coord.col5.px1, coord.col5.py1, coord.col5.px2, coord.col5.py2);
      doc.line(coord.lin7.px1, coord.lin7.py1, coord.lin7.px2, coord.lin7.py2);
      doc.line(coord.col6.px1, coord.col6.py1, coord.col6.px2, coord.col6.py2);
      doc.line(coord.col7.px1, coord.col7.py1, coord.col7.px2, coord.col7.py2);
      doc.rect(coord.ret1.x, coord.ret1.y, coord.ret1.w, coord.ret1.h);
      doc.rect(coord.ret2.x, coord.ret2.y, coord.ret2.w, coord.ret2.h);
      doc.rect(coord.ret3.x, coord.ret3.y, coord.ret3.w, coord.ret3.h);
      doc.rect(coord.ret4.x, coord.ret4.y, coord.ret4.w, coord.ret4.h);
      doc.rect(coord.ret5.x, coord.ret5.y, coord.ret5.w, coord.ret5.h);
      doc.rect(coord.ret6.x, coord.ret6.y, coord.ret6.w, coord.ret6.h);
      doc.rect(coord.ret7.x, coord.ret7.y, coord.ret7.w, coord.ret7.h);
      doc.rect(coord.ret8.x, coord.ret8.y, coord.ret8.w, coord.ret8.h);
      doc.setFontStyle('bold');
      doc.text(coord.text1.texto, coord.text1.x, coord.text1.y);
      doc.text(coord.text2.texto, coord.text2.x, coord.text2.y);
      doc.text(coord.text3.texto, coord.text3.x, coord.text3.y);
      doc.setFontStyle('normal');
      doc.text(coord.text4.texto, coord.text4.x, coord.text4.y);
      doc.text(coord.text5.texto, coord.text5.x, coord.text5.y);
      doc.text(coord.text6.texto, coord.text6.x, coord.text6.y);
      doc.setFontSize(8);
      doc.text(coord.text7.texto, coord.text7.x, coord.text7.y);
      doc.text(coord.text8.texto, coord.text8.x, coord.text8.y);
      doc.text(coord.text9.texto, coord.text9.x, coord.text9.y);
      doc.text(coord.text10.texto, coord.text10.x, coord.text10.y);
      doc.text(coord.text11.texto, coord.text11.x, coord.text11.y);
      doc.text(coord.textRet1.texto, coord.textRet1.x, coord.textRet1.y);
      doc.text(coord.textRet2.texto, coord.textRet2.x, coord.textRet2.y);
      doc.text(coord.textRet3.texto, coord.textRet3.x, coord.textRet3.y);
      doc.text(coord.textRet4.texto, coord.textRet4.x, coord.textRet4.y);
      doc.text(coord.textRet5.texto, coord.textRet5.x, coord.textRet5.y);
      doc.text(coord.textRet6.texto, coord.textRet6.x, coord.textRet6.y);
      doc.text(coord.textRet7.texto, coord.textRet7.x, coord.textRet7.y);
      doc.text(coord.textRet8.texto, coord.textRet8.x, coord.textRet8.y);
      doc.text(coord.text12.texto, coord.text12.x, coord.text12.y);
      doc.text(coord.text13.texto, coord.text13.x, coord.text13.y);
      doc.text(coord.text14.texto, coord.text14.x, coord.text14.y);
      doc.text(coord.text15.texto, coord.text15.x, coord.text15.y);
      doc.text(coord.text16.texto, coord.text16.x, coord.text16.y);
      doc.text(coord.text17.texto, coord.text17.x, coord.text17.y);
      doc.ellipse(coord.elipse.x, coord.elipse.y, coord.elipse.rx, coord.elipse.ry);
      doc.triangle(coord.triangle.x1, coord.triangle.y1, coord.triangle.x2, coord.triangle.y2, coord.triangle.x3, coord.triangle.y3, 'S');
      doc.setFontStyle('bold');
      doc.text(coord.text18.texto, coord.text18.x, coord.text18.y);
      doc.addImage(this.imageData, 'PNG', coord.logo.x, coord.logo.y, coord.logo.w, coord.logo.h);
      // tslint:disable-next-line: max-line-length
      doc.line(coord.linhaCorteSeloInicio.px1, coord.linhaCorteSeloInicio.py1, coord.linhaCorteSeloInicio.px2, coord.linhaCorteSeloInicio.py2);
      // tslint:disable-next-line: max-line-length
      doc.line(coord.linhaCorteSeloFim.px1, coord.linhaCorteSeloFim.py1, coord.linhaCorteSeloFim.px2, coord.linhaCorteSeloFim.py2);
      // tslint:disable-next-line: max-line-length
      doc.line(coord.linhaCorteDobraInicio.px1, coord.linhaCorteDobraInicio.py1, coord.linhaCorteDobraInicio.px2, coord.linhaCorteDobraInicio.py2);
      doc.line(coord.linhaCorteDobraFim.px1, coord.linhaCorteDobraFim.py1, coord.linhaCorteDobraFim.px2, coord.linhaCorteDobraFim.py2);
      doc.text(coord.text19.texto, coord.text19.x, coord.text19.y);
      doc.text(coord.text20.texto, coord.text20.x, coord.text20.y);
      doc.text(coord.text21.texto, coord.text21.x, coord.text21.y);
      doc.text(coord.text22.texto, coord.text22.x, coord.text22.y);
      doc.text(coord.text23.texto, coord.text23.x, coord.text23.y);
      doc.setFontSize(22);
      doc.setFontStyle('bold');
      doc.text(coord.text24.texto, coord.text24.x, coord.text24.y);
      doc.setFontSize(18);
      doc.text(coord.text25.texto, coord.text25.x, coord.text25.y);
      doc.addImage(this.imageText, 'PNG', coord.imageText.x, coord.imageText.y, coord.imageText.w, coord.imageText.h);
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
      doc.setFontStyle('bold');
      doc.text(coord.text33.texto, coord.text33.x, coord.text33.y);
      doc.setFontSize(6);
      doc.text(coord.text31.texto, coord.text31.x, coord.text31.y);
      doc.text(coord.text32.texto, coord.text32.x, coord.text32.y);
      doc.setFontSize(12);
      doc.text(coord.text39.texto, coord.text39.x, coord.text39.y);
      doc.text(coord.text40.texto, coord.text40.x, coord.text40.y);
      doc.text(coord.text41.texto, coord.text41.x, coord.text41.y);
      doc.addImage(base64data, 'JPG', coord.qrcode.x, coord.qrcode.y, coord.qrcode.w, coord.qrcode.h);
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
