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
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'map',
                type: 'image',
                rect: ['22px', '22px','887px','457px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['180px', '216px','586px','110px','auto', 'auto'],
                text: "ただの塾や予備校ではない。",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif', 27, "rgba(0,0,0,1)", "900", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['148px', '271px','650px','56px','auto', 'auto'],
                text: "プロのコーチングを通じて世界で活躍する人財へ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 24, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['211px', '154px','56px','56px','auto', 'auto'],
                text: "就",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['259px', '154px','43px','49px','auto', 'auto'],
                text: "活",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['287px', '154px','60px','56px','auto', 'auto'],
                text: "コ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['328px', '154px','56px','42px','auto', 'auto'],
                text: "ー",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['362px', '154px','66px','51px','auto', 'auto'],
                text: "チ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['414px', '154px','38px','35px','auto', 'auto'],
                text: "ン",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['445px', '154px','49px','39px','auto', 'auto'],
                text: "グ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['483px', '154px','45px','49px','auto', 'auto'],
                text: "の",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['506px', '154px','70px','60px','auto', 'auto'],
                text: "パ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['550px', '154px','57px','74px','auto', 'auto'],
                text: "イ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['579px', '154px','70px','56px','auto', 'auto'],
                text: "オ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['626px', '154px','49px','69px','auto', 'auto'],
                text: "ニ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text17',
                type: 'text',
                rect: ['635px', '154px','100px','66px','auto', 'auto'],
                text: "ア",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['1px', '0px','930px','500px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['190px', '22px','545px','49px','auto', 'auto'],
                text: "関西No.1の満足度、実績を誇る",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 36, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text19',
                type: 'text',
                rect: ['-36px', '368px','1037px','77px','auto', 'auto'],
                text: "優良企業様サイバーエージェント様などにも<br>オフィシャルスポンサーになって頂いております",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 19, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'imgres-10',
                type: 'image',
                rect: ['292px', '303px','159px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-10.jpg",'0px','0px']
            },
            {
                id: 'imgres-9',
                type: 'image',
                rect: ['99px', '310px','159px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-9.jpg",'0px','0px']
            },
            {
                id: 'imgres-11',
                type: 'image',
                rect: ['722px', '295px','72px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-11.jpg",'0px','0px']
            },
            {
                id: 'imgres-3',
                type: 'image',
                rect: ['482px', '187px','159px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-3.jpg",'0px','0px']
            },
            {
                id: 'imgres-2',
                type: 'image',
                rect: ['292px', '189px','159px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-2.jpg",'0px','0px']
            },
            {
                id: 'imgres-4',
                type: 'image',
                rect: ['672px', '188px','159px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-4.jpg",'0px','0px']
            },
            {
                id: 'imgres-7',
                type: 'image',
                rect: ['482px', '247px','159px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-7.jpg",'0px','0px']
            },
            {
                id: 'imgres-8',
                type: 'image',
                rect: ['672px', '237px','159px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-8.jpg",'0px','0px']
            },
            {
                id: 'imgres-1',
                type: 'image',
                rect: ['292px', '110px','159px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-1.jpg",'0px','0px']
            },
            {
                id: 'imgres-12',
                type: 'image',
                rect: ['478px', '112px','165px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-12.jpg",'0px','0px']
            },
            {
                id: 'imgres-6',
                type: 'image',
                rect: ['292px', '246px','159px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-6.jpg",'0px','0px']
            },
            {
                id: 'images-1',
                type: 'image',
                rect: ['99px', '186px','159px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"images-1.jpg",'0px','0px']
            },
            {
                id: 'images',
                type: 'image',
                rect: ['482px', '300px','159px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"images.jpg",'0px','0px']
            },
            {
                id: 'imgres-5',
                type: 'image',
                rect: ['99px', '247px','159px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-5.jpg",'0px','0px']
            },
            {
                id: 'imgres',
                type: 'image',
                rect: ['99px', '113px','159px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres.jpg",'0px','0px']
            },
            {
                id: 'imgres-13',
                type: 'image',
                rect: ['667px', '111px','166px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imgres-13.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_imgres-12}": [
                ["style", "top", '112px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '42px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '478px'],
                ["style", "width", '165px']
            ],
            "${_Text15}": [
                ["style", "top", '154px'],
                ["style", "width", '70px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '579px'],
                ["style", "font-size", '36px']
            ],
            "${_imgres-1}": [
                ["style", "top", '110px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '55px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '292px'],
                ["style", "width", '159px']
            ],
            "${_imgres-9}": [
                ["style", "top", '310px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '99px'],
                ["style", "width", '159px']
            ],
            "${_Text2}": [
                ["style", "top", '247px'],
                ["style", "width", '650px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '148px'],
                ["style", "font-size", '24px']
            ],
            "${_imgres}": [
                ["style", "top", '113px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '99px'],
                ["style", "width", '159px']
            ],
            "${_imgres-10}": [
                ["style", "top", '303px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '47px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '292px'],
                ["style", "width", '159px']
            ],
            "${_images}": [
                ["style", "top", '300px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '53px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '482px'],
                ["style", "width", '159px']
            ],
            "${_imgres-5}": [
                ["style", "top", '247px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '28px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '99px'],
                ["style", "width", '159px']
            ],
            "${_Text18}": [
                ["style", "top", '22px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '190px'],
                ["style", "width", '545px']
            ],
            "${_imgres-13}": [
                ["style", "top", '111px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '667px'],
                ["style", "width", '166px']
            ],
            "${_imgres-11}": [
                ["style", "top", '295px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '722px'],
                ["style", "width", '72px']
            ],
            "${_Text10}": [
                ["style", "top", '154px'],
                ["style", "width", '38px'],
                ["style", "height", '35px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '414px'],
                ["style", "font-size", '36px']
            ],
            "${_imgres-6}": [
                ["style", "top", '246px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '33px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '292px'],
                ["style", "width", '159px']
            ],
            "${_Text9}": [
                ["style", "top", '154px'],
                ["style", "width", '66px'],
                ["style", "height", '51px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '362px'],
                ["style", "font-size", '36px']
            ],
            "${_Text19}": [
                ["style", "top", '368px'],
                ["style", "font-size", '19px'],
                ["style", "height", '77px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-36px'],
                ["style", "width", '1037px']
            ],
            "${_Text7}": [
                ["style", "top", '154px'],
                ["style", "width", '60px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "font-size", '36px']
            ],
            "${_Text11}": [
                ["style", "top", '154px'],
                ["style", "width", '49px'],
                ["style", "height", '39px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '445px'],
                ["style", "font-size", '36px']
            ],
            "${_Text5}": [
                ["style", "top", '154px'],
                ["style", "width", '43px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '259px'],
                ["style", "font-size", '36px']
            ],
            "${_imgres-2}": [
                ["style", "top", '189px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '27px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '292px'],
                ["style", "width", '159px']
            ],
            "${_imgres-7}": [
                ["style", "top", '247px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '29px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '482px'],
                ["style", "width", '159px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "top", '0px']
            ],
            "${_imgres-3}": [
                ["style", "top", '187px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '482px'],
                ["style", "width", '159px']
            ],
            "${_images-1}": [
                ["style", "top", '186px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '41px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '99px'],
                ["style", "width", '159px']
            ],
            "${_Text14}": [
                ["style", "top", '154px'],
                ["style", "width", '57px'],
                ["style", "height", '74px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '550px'],
                ["style", "font-size", '36px']
            ],
            "${_Text17}": [
                ["style", "top", '154px'],
                ["style", "width", '100px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '635px'],
                ["style", "font-size", '36px']
            ],
            "${_Text16}": [
                ["style", "top", '154px'],
                ["style", "width", '49px'],
                ["style", "height", '69px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '626px'],
                ["style", "font-size", '36px']
            ],
            "${_Text13}": [
                ["style", "top", '154px'],
                ["style", "width", '70px'],
                ["style", "height", '60px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '506px'],
                ["style", "font-size", '36px']
            ],
            "${_Text8}": [
                ["style", "top", '154px'],
                ["style", "width", '56px'],
                ["style", "height", '42px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '328px'],
                ["style", "font-size", '36px']
            ],
            "${_map}": [
                ["style", "top", '22px'],
                ["style", "height", '457px'],
                ["style", "opacity", '1'],
                ["style", "left", '22px'],
                ["style", "width", '887px']
            ],
            "${_Text}": [
                ["style", "font-weight", '900'],
                ["style", "left", '180px'],
                ["style", "width", '586px'],
                ["style", "top", '192px'],
                ["style", "text-align", 'center'],
                ["style", "height", '110px'],
                ["style", "font-family", '\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif'],
                ["style", "font-size", '24px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text12}": [
                ["style", "top", '154px'],
                ["style", "width", '45px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '483px'],
                ["style", "font-size", '36px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '400px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '930px']
            ],
            "${_imgres-8}": [
                ["style", "top", '237px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '672px'],
                ["style", "width", '159px']
            ],
            "${_imgres-4}": [
                ["style", "top", '188px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '672px'],
                ["style", "width", '159px']
            ],
            "${_Text4}": [
                ["style", "top", '154px'],
                ["style", "width", '56px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '211px'],
                ["style", "font-size", '36px']
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
                { id: "eid19", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0.000000'}], position: 1607, duration: 357 },
                { id: "eid170", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid35", tween: [ "style", "${_Text14}", "opacity", '1', { fromValue: '0.000000'}], position: 2857, duration: 357 },
                { id: "eid162", tween: [ "style", "${_Text14}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid23", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0.000000'}], position: 1964, duration: 357 },
                { id: "eid165", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid45", tween: [ "style", "${_Text18}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 750 },
                { id: "eid111", tween: [ "style", "${_Text19}", "opacity", '1', { fromValue: '0.000000'}], position: 6786, duration: 667 },
                { id: "eid12", tween: [ "style", "${_Text}", "top", '225px', { fromValue: '192px'}], position: 1250, duration: 500 },
                { id: "eid68", tween: [ "style", "${_imgres-10}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 250 },
                { id: "eid77", tween: [ "style", "${_imgres-12}", "opacity", '1', { fromValue: '0.000000'}], position: 6250, duration: 250 },
                { id: "eid70", tween: [ "style", "${_imgres-13}", "opacity", '1', { fromValue: '0.000000'}], position: 6250, duration: 250 },
                { id: "eid74", tween: [ "style", "${_imgres-6}", "opacity", '1', { fromValue: '0.000000'}], position: 6500, duration: 250 },
                { id: "eid33", tween: [ "style", "${_Text13}", "opacity", '1', { fromValue: '0.000000'}], position: 2679, duration: 357 },
                { id: "eid166", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid72", tween: [ "style", "${_imgres-2}", "opacity", '1', { fromValue: '0.000000'}], position: 6500, duration: 250 },
                { id: "eid13", tween: [ "style", "${_Text2}", "top", '280px', { fromValue: '247px'}], position: 1250, duration: 500 },
                { id: "eid67", tween: [ "style", "${_imgres-1}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid31", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 357 },
                { id: "eid172", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid15", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 357 },
                { id: "eid171", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
                { id: "eid21", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0.000000'}], position: 1786, duration: 357 },
                { id: "eid164", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
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
