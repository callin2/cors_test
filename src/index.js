const parse = require('csv-parse')
const fs = require('fs')

let head = `
<!DOCTYPE html>
<html>
<head>
<meta name="Generator" content="Hancom HWP 10.30.3.2478">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Title</title>

<STYLE type="text/css">
<!--
p.HStyle0
\t{style-name:"바탕글"; margin-top:0.0pt; margin-bottom:0.0pt; text-align:justify; text-indent:0.0pt; line-height:160%; font-size:10.0pt; font-family:한컴바탕; letter-spacing:0; font-weight:"normal"; font-style:"normal"; color:#000000;}
li.HStyle0
\t{style-name:"바탕글"; margin-top:0.0pt; margin-bottom:0.0pt; text-align:justify; text-indent:0.0pt; line-height:160%; font-size:10.0pt; font-family:한컴바탕; letter-spacing:0; font-weight:"normal"; font-style:"normal"; color:#000000;}
div.HStyle0
\t{style-name:"바탕글"; margin-top:0.0pt; margin-bottom:0.0pt; text-align:justify; text-indent:0.0pt; line-height:160%; font-size:10.0pt; font-family:한컴바탕; letter-spacing:0; font-weight:"normal"; font-style:"normal"; color:#000000;}
-->
</STYLE>

</head>
<body>
`

let foot = `
</body>
</html>
`

function devTitle(areaNm, devTypeName, devDtlType) {
    return `
    
<P CLASS=HStyle0 STYLE='text-align:center;line-height:120%;'></P>
<TABLE border="1" cellspacing="0" cellpadding="0" style='border-collapse:collapse;border:none;page-break-after: always'>
<TR>
\t<TD colspan="4" valign="middle" style='width:711;height:27;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-size:12.0pt;font-family:"한컴돋움";font-weight:"bold";line-height:160%'>${devTypeName}</SPAN>&nbsp;</P>
\t</TD>
</TR>
<TR>
\t<TD valign="middle" style='width:153;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움";font-weight:"bold"'>역명</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" style='width:199;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움";font-weight:"bold"'>장치명</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" style='width:182;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움";font-weight:"bold"'>시험일자</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" style='width:178;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움";font-weight:"bold"'>시험자 / 서명</SPAN> </P>
\t</TD>
</TR>
<TR>
\t<TD valign="middle" style='width:153;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${areaNm}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" style='width:199;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${devDtlType}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" style='width:182;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>2021.&nbsp;&nbsp;&nbsp; .&nbsp;&nbsp; </SPAN> </P>
\t</TD>
\t<TD valign="middle" style='width:178;height:25;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>/</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
</TR>
</TABLE>
<P CLASS=HStyle0 STYLE='text-align:center;line-height:120%;'></P>

<P CLASS=HStyle0 STYLE='margin-top:2.0pt;margin-bottom:2.0pt;line-height:120%;'><SPAN STYLE='font-size:8.0pt;font-family:"굴림체";line-height:120%'>&nbsp;* 시험 값이 있는 경우 값을 기록하고 합격인 경우에는 A, 불합격인경우에는 UA로 표기한다.</SPAN> </P>

<P CLASS=HStyle0 STYLE='line-height:120%;'><SPAN STYLE='font-size:8.0pt;font-family:"굴림체";line-height:120%'>&nbsp;</SPAN></P>
    `
}


function greenColTitle() {
    return `
<TABLE border="1" cellspacing="0" cellpadding="0" style='border-collapse:collapse;border:none;'>
<TR>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:46;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>번호</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:89;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>명칭</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:89;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>기능명</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:250;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>시험 항목</SPAN> </P>
\t</TD>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:101;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>입력값</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:79;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>시험 결과</SPAN> </P>
\t</TD>
\t<TD valign="middle" bgcolor="#c2dfa5"  style='width:51;height:38;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
\t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>비고</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
\t</TD>
</TR>
    `
}


function genTestItems(devIndex, devNm, menuNm, testItems, inputVals) {

    let firstRow = `
        <TR>
	<TD rowspan="${testItems.length}" valign="middle" style='width:46;height:84;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"굴림"'>${devIndex} </SPAN> </P>
	</TD>
	<TD rowspan="${testItems.length}" valign="middle" style='width:89;height:84;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${devNm}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
	</TD>
	<TD rowspan="${testItems.length}" valign="middle" style='width:89;height:84;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${menuNm}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
	</TD>
	<TD valign="middle" style='width:250;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${testItems[0]}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
	</TD>
	<TD valign="middle" style='width:101;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${inputVals[0]}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
	</TD>
	<TD valign="middle" style='width:79;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"굴림"'> </SPAN>&nbsp;</P>
	</TD>
	<TD valign="middle" style='width:51;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
	<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"굴림"'> </SPAN>&nbsp;</P>
	</TD>
</TR>
    `

    let restRow = [];

    for (let idx = 1; idx < testItems.length; idx++) {
        restRow.push(`

            <TR>
            \t<TD valign="middle" style='width:250;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
            \t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${testItems[idx]}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
            \t</TD>
            \t<TD valign="middle" style='width:101;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
            \t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"한컴돋움"'>${inputVals[idx]}</SPAN><SPAN STYLE='font-family:"굴림"'> </SPAN> </P>
            \t</TD>
            \t<TD valign="middle" style='width:79;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
            \t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"굴림"'> </SPAN>&nbsp;</P>
            \t</TD>
            \t<TD valign="middle" style='width:51;height:21;border-left:solid #000000 0.4pt;border-right:solid #000000 0.4pt;border-top:solid #000000 0.4pt;border-bottom:solid #000000 0.4pt;padding:1.4pt 5.1pt 1.4pt 5.1pt'>
            \t<P CLASS=HStyle0 STYLE='text-align:center;'><SPAN STYLE='font-family:"굴림"'> </SPAN>&nbsp;</P>
            \t</TD>
            </TR>
        `)
    }

    return firstRow + restRow.join('\n')
}


function genHwpFile(devTypeName, devDtlType, devListFile, menuNm, testItems, inputVals, outFile) {
    let str = (fs.readFileSync(devListFile)).toString()

    let prevAreaNm = '';
    let areaIndex = 1;

    let result = [head];

    parse(str.trim(), {delimiter: '\t'}, function (err, records) {
        records.map((v, i) => {
            v[1] = v[1].trim()

            if (prevAreaNm != v[0]) {
                if (prevAreaNm !== '') {
                    result.push(`</table>`)
                    result.push(`<P CLASS=HStyle0 STYLE='line-height:120%;'><SPAN STYLE='font-size:8.0pt;font-family:"굴림체";line-height:120%'>&nbsp;</SPAN></P>`)
                    result.push(`<P CLASS=HStyle0 STYLE='text-align:center;line-height:120%;'></P>`)
                }
                result.push(devTitle(v[0], devTypeName, devDtlType))
                result.push(greenColTitle())
                prevAreaNm = v[0];
                areaIndex = 1;
            }


            result.push(genTestItems(areaIndex, v[1], menuNm, testItems, inputVals))
            areaIndex++;
        })

        result.push(`</table>`)

        result.push(foot)
        fs.writeFileSync(outFile, result.join('\n'))
    })
}


genHwpFile("선로전환기", "선로전환기-MJ", "./src/pmd.csv", "장치목록",
    ["건전성 순위 표시",
    "선로전환기 검측값  표시",
    "팝업표시",
    "팝업 선로전환기 장치명 표시",
    "팝업 선로전화기 검측값 표시"],
    ["표시확인",
    "검측값",
    "표시확인",
    "표시확인",
    "검측값"], "./out/pmd_001.html");

genHwpFile("선로전환기", "선로전환기-MJ", "./src/pmd.csv", "장치상세",
    ["선로전환기 기준값(최대/최소) 표시",
        "선로전환기 검측값 표시",
        "선로전환기 향후 이상 확률 예측 표시",
        "선로전환기 과거 이상 이력 표시"],
    ["표시확인",
        "검측값",
        "표시확인",
        "표시확인"], "./out/pmd_002.html");

genHwpFile("선로전환기", "선로전환기-MJ", "./src/pmd.csv", "추이분석",
    ["선로전환기 검측값 추이표시",
        "선로전환기 이상 이력 추이 표시",
        "팝업 선로전환기 장치명 표시",
        "팝업 선로전환기 이상 이력 시점 검측값 표시"],
    ["검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/pmd_003.html");

genHwpFile("선로전환기", "선로전환기-MJ", "./src/pmd.csv", "추이분석[히트맵]",
    ["선로전환기 이상 이력 히트맵 추이표시",
        "선로전환기 이상 이력 시점 검측값 표시"],
    ["검측값",
        "표시확인"], "./out/pmd_004.html");

//---------  tc  -----

genHwpFile("ATC선로변기능모듈", "TC", "./src/tlds_tc.csv", "장치목록",
    ["건전성 순위",
        "TC 검측값 표시",
        "팝업표시",
        "팝업 TC 장치명 표시",
        "팝업 TC 검측값 표시"],
    ["표시확인",
        "검측값",
        "표시확인",
        "표시확인",
        "검측값"], "./out/tc_001.html");


genHwpFile("ATC선로변기능모듈", "TC", "./src/tlds_tc.csv", "장치상세",
    ["TC 검측값 표시",
        "TC 기준값(최대/최소)표시",
        "TC 향후 이상 확률 예측 표시",
        "TC 과거이상 이력 표시"],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/tc_002.html");


genHwpFile("ATC선로변기능모듈", "TC", "./src/tlds_tc.csv", "추이분석",
    [
        "TC 시간당 오차값 표시",
        "TC 이상 이력 추이 표시",
        "팝업 TC 장치명 표시",
        "팝업 TC 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/tc_003.html");


genHwpFile("ATC선로변기능모듈", "TC", "./src/tlds_tc.csv", "추이분석[시간]",
    [
        "TC시간 추이 표시",
        "TC 이상 이력 추이 표시",
        "팝업 TC 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
        ], "./out/tc_004.html");


genHwpFile("ATC선로변기능모듈", "TC", "./src/tlds_tc.csv", "추이분석[히트맵]",
    [
        "TC 이상 이력 히트맵 추이표시",
        "TC 이상 이력 시점 검측값 표시"],
    [
        "검측값",
        "표시확인"], "./out/tc_005.html");


genHwpFile("ATC선로변기능모듈", "TC", "./src/tlds_tc.csv", "단락분석",
    [
        "TC 점유 목록 표시",
        "점유 이력 분석값 표시"
    ],
    ["표시확인",
        "표시확인",
       ], "./out/tc_006.html");


//---------  ITL   -----

genHwpFile("ATC선로변기능모듈", "ITL", "./src/tlds_itl.csv", "장치목록",
    ["건전성 순위",
        "ITL 검측값 표시",
        "팝업표시",
        "팝업 ITL 장치명 표시",
        "팝업 ITL 검측값 표시"],
    ["표시확인",
        "검측값",
        "표시확인",
        "표시확인",
        "검측값"], "./out/itl_001.html");


genHwpFile("ATC선로변기능모듈", "ITL", "./src/tlds_itl.csv", "장치상세",
    ["ITL 검측값 표시",
        "ITL 기준값(최대/최소)표시",
        "ITL 향후 이상 확률 예측 표시",
        "ITL 과거이상 이력 표시"],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/itl_002.html");



genHwpFile("ATC선로변기능모듈", "ITL", "./src/tlds_itl.csv", "추이분석",
    [
        "ITL 시간당 오차값 표시",
        "ITL 이상 이력 추이 표시",
        "팝업 ITL 장치명 표시",
        "팝업 ITL 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/itl_003.html");


genHwpFile("ATC선로변기능모듈", "ITL", "./src/tlds_itl.csv", "추이분석[시간]",
    [
        "ITL 시간 추이 표시",
        "ITL 이상 이력 추이 표시",
        "팝업 ITL 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
    ], "./out/itl_004.html");


genHwpFile("ATC선로변기능모듈", "ITL", "./src/tlds_itl.csv", "추이분석[히트맵]",
    [
        "ITL 이상 이력 히트맵 추이표시",
        "ITL 이상 이력 시점 검측값 표시"],
    [
        "검측값",
        "표시확인"], "./out/itl_005.html");


// ---------  ID --------------


genHwpFile("ATC선로변기능모듈", "ID", "./src/tlds_id.csv", "장치목록",
    ["건전성 순위",
        "ID 검측값 표시",
        "팝업표시",
        "팝업 ID 장치명 표시",
        "팝업 ID 검측값 표시"],
    ["표시확인",
        "검측값",
        "표시확인",
        "표시확인",
        "검측값"], "./out/id_001.html");


genHwpFile("ATC선로변기능모듈", "ID", "./src/tlds_id.csv", "장치상세",
    ["ID 검측값 표시",
        "ID 기준값(최대/최소)표시",
        "ID 향후 이상 확률 예측 표시",
        "ID 과거이상 이력 표시"],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/id_002.html");



genHwpFile("ATC선로변기능모듈", "ID", "./src/tlds_id.csv", "추이분석",
    [
        "ID 시간당 오차값 표시",
        "ID 이상 이력 추이 표시",
        "팝업 ID 장치명 표시",
        "팝업 ID 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/id_003.html");


genHwpFile("ATC선로변기능모듈", "ID", "./src/tlds_id.csv", "추이분석[시간]",
    [
        "ID 시간 추이 표시",
        "ID 이상 이력 추이 표시",
        "팝업 ID 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
    ], "./out/id_004.html");


genHwpFile("ATC선로변기능모듈", "ID", "./src/tlds_id.csv", "추이분석[히트맵]",
    [
        "ID 이상 이력 히트맵 추이표시",
        "ID 이상 이력 시점 검측값 표시"],
    [
        "검측값",
        "표시확인"], "./out/id_005.html");


// ---------  DD --------------


genHwpFile("ATC선로변기능모듈", "DD", "./src/tlds_dd.csv", "장치목록",
    ["건전성 순위",
        "DD 검측값 표시",
        "팝업표시",
        "팝업 DD 장치명 표시",
        "팝업 DD 검측값 표시"],
    ["표시확인",
        "검측값",
        "표시확인",
        "표시확인",
        "검측값"], "./out/dd_001.html");


genHwpFile("ATC선로변기능모듈", "DD", "./src/tlds_dd.csv", "장치상세",
    ["DD 검측값 표시",
        "DD 기준값(최대/최소)표시",
        "DD 향후 이상 확률 예측 표시",
        "DD 과거이상 이력 표시"],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/dd_002.html");



genHwpFile("ATC선로변기능모듈", "DD", "./src/tlds_dd.csv", "추이분석",
    [
        "DD 시간당 오차값 표시",
        "DD 이상 이력 추이 표시",
        "팝업 DD 장치명 표시",
        "팝업 DD 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
        "표시확인"], "./out/dd_003.html");


genHwpFile("ATC선로변기능모듈", "DD", "./src/tlds_dd.csv", "추이분석[시간]",
    [
        "DD 시간 추이 표시",
        "DD 이상 이력 추이 표시",
        "팝업 DD 이상 이력 시점 검측값 표시",
    ],
    [
        "검측값",
        "표시확인",
        "표시확인",
    ], "./out/dd_004.html");


genHwpFile("ATC선로변기능모듈", "DD", "./src/tlds_dd.csv", "추이분석[히트맵]",
    [
        "DD 이상 이력 히트맵 추이표시",
        "DD 이상 이력 시점 검측값 표시"],
    [
        "검측값",
        "표시확인"], "./out/dd_005.html");