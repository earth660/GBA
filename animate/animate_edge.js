/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'map',
                type: 'image',
                rect: ['2.4%', '4.4%','95.4%','91.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['19.4%', '43.2%','63%','22%','auto', 'auto'],
                text: "ただの塾や予備校ではない。",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif', 27, "rgba(0,0,0,1)", "900", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['15.9%', '54.2%','69.9%','11.2%','auto', 'auto'],
                text: "プロのコーチングを通じて世界で活躍する人財へ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 24, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['22.7%', '30.8%','6%','11.2%','auto', 'auto'],
                text: "就",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['27.9%', '30.8%','4.6%','9.8%','auto', 'auto'],
                text: "活",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['30.9%', '30.8%','6.5%','11.2%','auto', 'auto'],
                text: "コ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['35.3%', '30.8%','6%','8.4%','auto', 'auto'],
                text: "ー",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['38.9%', '30.8%','7.1%','10.2%','auto', 'auto'],
                text: "チ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['44.5%', '30.8%','4.1%','7%','auto', 'auto'],
                text: "ン",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['47.9%', '30.8%','5.3%','7.8%','auto', 'auto'],
                text: "グ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['51.9%', '30.8%','4.8%','9.8%','auto', 'auto'],
                text: "の",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['54.4%', '30.8%','7.5%','12%','auto', 'auto'],
                text: "パ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['59.1%', '30.8%','6.1%','14.8%','auto', 'auto'],
                text: "イ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['62.3%', '30.8%','7.5%','11.2%','auto', 'auto'],
                text: "オ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['67.3%', '30.8%','5.3%','13.8%','auto', 'auto'],
                text: "ニ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text17',
                type: 'text',
                rect: ['68.3%', '30.8%','10.8%','13.2%','auto', 'auto'],
                text: "ア",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0.1%', '0%','100%','100%','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['20.4%', '4.4%','58.6%','9.8%','auto', 'auto'],
                text: "関西No.1の満足度、実績を誇る",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text19',
                type: 'text',
                rect: ['-3.9%', '73.6%','111.5%','15.4%','auto', 'auto'],
                text: "優良企業様サイバーエージェント様などにも<br>オフィシャルスポンサーになって頂いております",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 19, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'imgres-10',
                type: 'image',
                rect: ['31.4%', '60.6%','17.1%','9.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-10.jpg",'0px','0px']
            },
            {
                id: 'imgres-9',
                type: 'image',
                rect: ['10.7%', '62%','17.1%','5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-9.jpg",'0px','0px']
            },
            {
                id: 'imgres-11',
                type: 'image',
                rect: ['77.6%', '59%','7.8%','12.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-11.jpg",'0px','0px']
            },
            {
                id: 'imgres-3',
                type: 'image',
                rect: ['51.8%', '37.4%','17.1%','6.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-3.jpg",'0px','0px']
            },
            {
                id: 'imgres-2',
                type: 'image',
                rect: ['31.4%', '37.8%','17.1%','5.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-2.jpg",'0px','0px']
            },
            {
                id: 'imgres-4',
                type: 'image',
                rect: ['72.3%', '37.6%','17.1%','6.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-4.jpg",'0px','0px']
            },
            {
                id: 'imgres-7',
                type: 'image',
                rect: ['51.8%', '49.4%','17.1%','5.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-7.jpg",'0px','0px']
            },
            {
                id: 'imgres-8',
                type: 'image',
                rect: ['72.3%', '47.4%','17.1%','9.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-8.jpg",'0px','0px']
            },
            {
                id: 'imgres-1',
                type: 'image',
                rect: ['31.4%', '22%','17.1%','11%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-1.jpg",'0px','0px']
            },
            {
                id: 'imgres-12',
                type: 'image',
                rect: ['51.4%', '22.4%','17.8%','8.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-12.jpg",'0px','0px']
            },
            {
                id: 'imgres-6',
                type: 'image',
                rect: ['31.4%', '49.2%','17.1%','6.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-6.jpg",'0px','0px']
            },
            {
                id: 'images-1',
                type: 'image',
                rect: ['10.7%', '37.2%','17.1%','8.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"images-1.jpg",'0px','0px']
            },
            {
                id: 'images',
                type: 'image',
                rect: ['51.8%', '60%','17.1%','10.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"images.jpg",'0px','0px']
            },
            {
                id: 'imgres-5',
                type: 'image',
                rect: ['10.7%', '49.4%','17.1%','5.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-5.jpg",'0px','0px']
            },
            {
                id: 'imgres',
                type: 'image',
                rect: ['10.7%', '22.6%','17.1%','7.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres.jpg",'0px','0px']
            },
            {
                id: 'imgres-13',
                type: 'image',
                rect: ['71.7%', '22.2%','17.9%','9.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-13.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_imgres-8}": [
                ["style", "top", '47.4%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '9.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '72.26%'],
                ["style", "width", '17.1%']
            ],
            "${_imgres-4}": [
                ["style", "top", '37.6%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '6.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '72.26%'],
                ["style", "width", '17.1%']
            ],
            "${_Text15}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '11.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '62.26%'],
                ["style", "width", '7.53%']
            ],
            "${_imgres-1}": [
                ["style", "top", '22%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '11%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '31.4%'],
                ["style", "width", '17.1%']
            ],
            "${_imgres-9}": [
                ["style", "top", '62%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '5%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '10.65%'],
                ["style", "width", '17.1%']
            ],
            "${_Text8}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '8.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '35.27%'],
                ["style", "width", '6.03%']
            ],
            "${_imgres}": [
                ["style", "top", '22.6%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '7.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '10.65%'],
                ["style", "width", '17.1%']
            ],
            "${_imgres-10}": [
                ["style", "top", '60.6%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '9.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '31.4%'],
                ["style", "width", '17.1%']
            ],
            "${_images}": [
                ["style", "top", '60%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '10.6%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.83%'],
                ["style", "width", '17.1%']
            ],
            "${_imgres-5}": [
                ["style", "top", '49.4%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '5.6%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '10.65%'],
                ["style", "width", '17.1%']
            ],
            "${_Text18}": [
                ["style", "top", '4.4%'],
                ["style", "height", '9.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '20.43%'],
                ["style", "width", '58.61%']
            ],
            "${_Text4}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '11.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '22.69%'],
                ["style", "width", '6.03%']
            ],
            "${_imgres-11}": [
                ["style", "top", '59%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '12.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '77.63%'],
                ["style", "width", '7.75%']
            ],
            "${_Text10}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '7%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '44.52%'],
                ["style", "width", '4.09%']
            ],
            "${_imgres-6}": [
                ["style", "top", '49.2%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '6.6%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '31.4%'],
                ["style", "width", '17.1%']
            ],
            "${_Text9}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '10.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '38.92%'],
                ["style", "width", '7.1%']
            ],
            "${_Text19}": [
                ["style", "top", '73.6%'],
                ["style", "width", '111.51%'],
                ["style", "height", '15.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-3.87%'],
                ["style", "font-size", '19px']
            ],
            "${_Text7}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '11.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '30.86%'],
                ["style", "width", '6.46%']
            ],
            "${_Text11}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '7.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '47.85%'],
                ["style", "width", '5.27%']
            ],
            "${_Text5}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '9.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '27.85%'],
                ["style", "width", '4.63%']
            ],
            "${_imgres-2}": [
                ["style", "top", '37.8%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '5.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '31.4%'],
                ["style", "width", '17.1%']
            ],
            "${_imgres-7}": [
                ["style", "top", '49.4%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '5.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.83%'],
                ["style", "width", '17.1%']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "top", '0%']
            ],
            "${_imgres-3}": [
                ["style", "top", '37.4%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '6.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.83%'],
                ["style", "width", '17.1%']
            ],
            "${_imgres-13}": [
                ["style", "top", '22.2%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '9.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71.72%'],
                ["style", "width", '17.85%']
            ],
            "${_Text17}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '13.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '68.28%'],
                ["style", "width", '10.76%']
            ],
            "${_Text16}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '13.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '67.31%'],
                ["style", "width", '5.27%']
            ],
            "${_Text13}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '12%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '54.41%'],
                ["style", "width", '7.53%']
            ],
            "${_imgres-12}": [
                ["style", "top", '22.4%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '8.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.4%'],
                ["style", "width", '17.75%']
            ],
            "${_map}": [
                ["style", "top", '4.4%'],
                ["style", "height", '91.4%'],
                ["style", "opacity", '1'],
                ["style", "left", '2.37%'],
                ["style", "width", '95.38%']
            ],
            "${_Text}": [
                ["style", "font-weight", '900'],
                ["style", "left", '19.35%'],
                ["style", "width", '63.02%'],
                ["style", "top", '38.4%'],
                ["style", "text-align", 'center'],
                ["style", "height", '22%'],
                ["style", "font-family", '\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '24px']
            ],
            "${_Text12}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '9.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.94%'],
                ["style", "width", '4.84%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '400px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "max-width", '1200px'],
                ["style", "width", '100%']
            ],
            "${_Text2}": [
                ["style", "top", '49.4%'],
                ["style", "font-size", '24px'],
                ["style", "height", '11.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '15.91%'],
                ["style", "width", '69.9%']
            ],
            "${_Text14}": [
                ["style", "top", '30.8%'],
                ["style", "font-size", '36px'],
                ["style", "height", '14.8%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '59.14%'],
                ["style", "width", '6.13%']
            ],
            "${_images-1}": [
                ["style", "top", '37.2%'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '8.2%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '10.65%'],
                ["style", "width", '17.1%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7453,
            autoPlay: true,
            timeline: [
                { id: "eid76", tween: [ "style", "${_imgres-11}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid163", tween: [ "style", "${_map}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid64", tween: [ "style", "${_images}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 250 },
                { id: "eid25", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0.000000'}], position: 2143, duration: 357 },
                { id: "eid177", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid75", tween: [ "style", "${_imgres-7}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 250 },
                { id: "eid2", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid174", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid37", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0.000000'}], position: 3036, duration: 357 },
                { id: "eid175", tween: [ "style", "${_Text15}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid62", tween: [ "style", "${_imgres-5}", "opacity", '1', { fromValue: '0.000000'}], position: 5750, duration: 250 },
                { id: "eid63", tween: [ "style", "${_imgres}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid66", tween: [ "style", "${_imgres-8}", "opacity", '1', { fromValue: '0.000000'}], position: 5750, duration: 250 },
                { id: "eid65", tween: [ "style", "${_imgres-3}", "opacity", '1', { fromValue: '0.000000'}], position: 6250, duration: 250 },
                { id: "eid73", tween: [ "style", "${_images-1}", "opacity", '1', { fromValue: '0.000000'}], position: 6750, duration: 250 },
                { id: "eid39", tween: [ "style", "${_Text16}", "opacity", '1', { fromValue: '0.000000'}], position: 3214, duration: 357 },
                { id: "eid176", tween: [ "style", "${_Text16}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid5", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 500 },
                { id: "eid167", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid69", tween: [ "style", "${_imgres-9}", "opacity", '1', { fromValue: '0.000000'}], position: 5750, duration: 250 },
                { id: "eid29", tween: [ "style", "${_Text11}", "opacity", '1', { fromValue: '0.000000'}], position: 2321, duration: 357 },
                { id: "eid173", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid13", tween: [ "style", "${_Text2}", "top", '56%', { fromValue: '49.4%'}], position: 1250, duration: 500 },
                { id: "eid35", tween: [ "style", "${_Text14}", "opacity", '1', { fromValue: '0.000000'}], position: 2857, duration: 357 },
                { id: "eid162", tween: [ "style", "${_Text14}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid23", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0.000000'}], position: 1964, duration: 357 },
                { id: "eid165", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid70", tween: [ "style", "${_imgres-13}", "opacity", '1', { fromValue: '0.000000'}], position: 6250, duration: 250 },
                { id: "eid111", tween: [ "style", "${_Text19}", "opacity", '1', { fromValue: '0.000000'}], position: 6786, duration: 667 },
                { id: "eid12", tween: [ "style", "${_Text}", "top", '45%', { fromValue: '38.4%'}], position: 1250, duration: 500 },
                { id: "eid68", tween: [ "style", "${_imgres-10}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 250 },
                { id: "eid72", tween: [ "style", "${_imgres-2}", "opacity", '1', { fromValue: '0.000000'}], position: 6500, duration: 250 },
                { id: "eid77", tween: [ "style", "${_imgres-12}", "opacity", '1', { fromValue: '0.000000'}], position: 6250, duration: 250 },
                { id: "eid33", tween: [ "style", "${_Text13}", "opacity", '1', { fromValue: '0.000000'}], position: 2679, duration: 357 },
                { id: "eid166", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid19", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0.000000'}], position: 1607, duration: 357 },
                { id: "eid170", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid74", tween: [ "style", "${_imgres-6}", "opacity", '1', { fromValue: '0.000000'}], position: 6500, duration: 250 },
                { id: "eid45", tween: [ "style", "${_Text18}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 750 },
                { id: "eid31", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 357 },
                { id: "eid172", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid15", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 357 },
                { id: "eid171", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid21", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0.000000'}], position: 1786, duration: 357 },
                { id: "eid164", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid67", tween: [ "style", "${_imgres-1}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid17", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0.000000'}], position: 1429, duration: 357 },
                { id: "eid169", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid71", tween: [ "style", "${_imgres-4}", "opacity", '1', { fromValue: '0.000000'}], position: 6750, duration: 250 },
                { id: "eid41", tween: [ "style", "${_Text17}", "opacity", '1', { fromValue: '0.000000'}], position: 3393, duration: 357 },
                { id: "eid168", tween: [ "style", "${_Text17}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-32163828");
