/**
 * @Author yymt
 * @Date 2020/8/10 0:23
 * @Version 1.0
 */

export default {
    "module": {
        "paper": {
            "unit": "mm",
            "size": "A4",
            "direction": "0",
            "left": 20,
            "top": 25,
            "right": 20,
            "bottom": 15,
            "width": 210,
            "height": 297
        },
        "calcs":["z1_5=z1_2 - z1_4","z2_5=sub(z2_2,z2_4)"],
        "fns":[['sub','a','b','return a-b;'],['testFmt','v','return v+"testFmt";']],
        "cols": [75, 68, 68, 66, 72, 37, 25, 65, 84, 103],
        "rows": [29, 46, 23, 23, 23, 23, 23, 32, 31, 31, 31, 33, 33, 34, 35, 35, 35, 38, 38, 40, 37, 41, 43, 43, 44, 26, 47, 32, 32],
        "cells": [{
            "name": "C1",
            "font": {"size": "13pt"},
            "alignment": 34,
            "range": [1, 3, 2, 6],
            "bind": {"name": "projectName"},
            //"isHtml":1,
            //"text":'<span style="padding-left:5px;padding-right:5px;margin-right: 5px;border-bottom: 2px solid black" data-bind-name="XMMC" data-editable="1"></span>高速公路工程项目'
        },
            {"text": "高速公路工程项目", "font": {"size": "13pt"}, "alignment": 33, "range": [1, 6, 2, 10]},
            {
                "name": "J1",
                "text": "施工自检",
                "font": {"size": "13pt"},
                "alignment": 18,
                "range": [1, 10, 2, 11],
                "bind": {"name": "µ1","component":{"name":"select","options":[{"value":"监理抽检"},{"value":"施工自检"}]}}
            }, {
                "text": "水准测量记录表",
                "font": {"size": "17pt", "weight": "bold"},
                "alignment": 18,
                "range": [2, 1, 3, 11]
            }, {"text": "承包单位：", "font": {"size": "9pt"}, "alignment": 36, "range": [3, 1, 4, 2]}, {
                "text": "合同号：",
                "font": {"size": "9pt"},
                "alignment": 36,
                "range": [3, 8, 4, 9]
            }, {
                "name": "I3",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [3, 9, 4, 11],
                "bind": {"name": "sectionName"}
            }, {"text": "监理单位：", "font": {"size": "9pt"}, "alignment": 36, "range": [4, 1, 5, 2]}, {
                "text": "编 号：",
                "font": {"size": "9pt"},
                "alignment": 36,
                "range": [4, 8, 5, 9]
            }, {
                "name": "I4",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [4, 9, 5, 11],
                "bind": {"name": "BH"}
            }, {"text": "工程名称：", "font": {"size": "9pt"}, "alignment": 36, "range": [5, 1, 6, 2]}, {
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [5, 9, 6, 10]
            }, {"font": {"size": "9pt"}, "alignment": 18, "range": [5, 10, 6, 11]}, {
                "text": "工程部位：",
                "font": {"size": "9pt"},
                "alignment": 36,
                "range": [6, 1, 7, 2]
            }, {
                "name": "B6",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [6, 2, 7, 6],
                "bind": {"name": "stakeName"}
            }, {"text": "检测日期：", "font": {"size": "9pt"}, "alignment": 36, "range": [6, 8, 7, 9]}, {
                "text": "测表3",
                "font": {"size": "9pt"},
                "alignment": 20,
                "range": [7, 1, 8, 11]
            }, {"text": "测点", "font": {"size": "9pt"}, "alignment": 18, "range": [8, 1, 10, 2]}, {
                "text": "水准尺读数",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [8, 2, 9, 5]
            }, {"text": "视线高", "font": {"size": "9pt"}, "alignment": 18, "range": [8, 5, 10, 6]}, {
                "text": "高程(m)",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [8, 6, 10, 8]
            }, {
                "text": "设计高程\r\n(m)",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [8, 8, 10, 9]
            }, {"text": "偏差值(mm)", "font": {"size": "9pt"}, "alignment": 18, "range": [8, 9, 10, 10]}, {
                "text": "备注",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [8, 10, 10, 11]
            }, {"text": "后视", "font": {"size": "9pt"}, "alignment": 18, "range": [9, 2, 10, 3]}, {
                "text": "中间点",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [9, 3, 10, 4]
            }, {"text": "前视", "font": {"size": "9pt"}, "alignment": 18, "range": [9, 4, 10, 5]}, {
                "text": "备注：",
                "font": {"size": "9pt"},
                "alignment": 17,
                "range": [26, 1, 27, 11]
            }, {
                "name": "B27",
                "font": {"size": "9pt"},
                "alignment": 17,
                "range": [27, 2, 28, 3],
                "bind": {"name": "x¨2"}
            }, {"text": "f容 = ±√n = ±√", "font": {"size": "9pt"}, "alignment": 20, "range": [27, 3, 28, 5]}, {
                "name": "E27",
                "font": {"size": "9pt"},
                "alignment": 17,
                "range": [27, 5, 28, 6],
                "bind": {"name": "x¨3"}
            }, {
                "name": "F27",
                "font": {"size": "9pt"},
                "alignment": 17,
                "range": [27, 6, 28, 11],
                "bind": {"name": "x¨1"}
            }, {"text": "测量：", "font": {"size": "9pt"}, "alignment": 20, "range": [28, 1, 29, 2]}, {
                "name": "B28",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [28, 2, 29, 5],
                "bind": {"name": "TBR"}
            }, {"font": {"size": "9pt"}, "alignment": 18, "range": [28, 5, 29, 6]}, {
                "text": "计算：",
                "font": {"size": "9pt"},
                "alignment": 20,
                "range": [28, 6, 29, 9]
            }, {
                "name": "I28",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [28, 9, 29, 11],
                "bind": {"name": "TBR¨2"}
            }, {"text": "复核：", "font": {"size": "9pt"}, "alignment": 20, "range": [29, 1, 30, 2]}, {
                "name": "B29",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [29, 2, 30, 5],
                "bind": {"name": "TBR¨1"}
            }, {"text": "测量工程师：", "font": {"size": "9pt"}, "alignment": 20, "range": [29, 6, 30, 9]}, {
                "name": "I29",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [29, 9, 30, 11],
                "bind": {"name": "TBR¨3"}
            }, {
                "name": "B3",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [3, 2, 4, 6],
                "bind": {"name": "uConstructionName"}
            }, {
                "name": "B4",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [4, 2, 5, 6],
                "bind": {"name": "uSupervisorName"}
            }, {
                "name": "B5",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [5, 2, 6, 6],
                "bind": {"name": "projectUnitName"}
            }, {
                "name": "I6",
                "font": {"size": "9pt"},
                "alignment": 33,
                "range": [6, 9, 7, 11],
                "bind": {"name": "TBRQ","dataType":"date","component":{"name":"date"}}
            }, {
                "name": "A10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 1, 11, 2],
                "bind": {"name": "z1_1"}
            }, {
                "name": "B10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 2, 11, 3],
                "bind": {"name": "z1_2","dataType":"float"}
            }, {
                "name": "C10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 3, 11, 4],
                "bind": {"name": "z1_3"}
            }, {
                "name": "D10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 4, 11, 5],
                "bind": {"name": "z1_4","dataType":"float"}
            }, {
                "name": "E10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 5, 11, 6],
                "bind": {"name": "z1_5","dataType":"float"}
            }, {
                "name": "F10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 6, 11, 8],
                "bind": {"name": "z1¨5_1"}
            }, {
                "name": "H10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 8, 11, 9],
                "bind": {"name": "z1_7"}
            }, {
                "name": "I10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 9, 11, 10],
                "bind": {"name": "z1¨9_1","dataType":"number","format":"0.00"}
            }, {
                "name": "J10",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [10, 10, 11, 11],
                "bind": {"idName":"z2_9","name": "z1_9","component":{"name":"selectRemote","src":"./component/select-remote-data.txt","changeSets":{"z1_9":"name"}}}
            }, {
                "name": "A11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 1, 12, 2],
                "bind": {"name": "z2_1"}
            }, {
                "name": "B11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 2, 12, 3],
                "bind": {"name": "z2_2","dataType":"float"}
            }, {
                "name": "C11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 3, 12, 4],
                "bind": {"name": "z2_3"}
            }, {
                "name": "D11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 4, 12, 5],
                "bind": {"name": "z2_4","dataType":"float"}
            }, {
                "name": "E11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 5, 12, 6],
                "bind": {"name": "z2_5"}
            }, {
                "name": "F11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 6, 12, 8],
                "bind": {"name": "z2¨5_1"}
            }, {
                "name": "H11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 8, 12, 9],
                "bind": {"name": "z2_7"}
            }, {
                "name": "I11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 9, 12, 10],
                "bind": {"name": "z2¨9_1"}
            }, {
                "name": "J11",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [11, 10, 12, 11],
                "bind": {"name": "z2_9"}
            }, {
                "name": "A12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 1, 13, 2],
                "bind": {"name": "z3_1"}
            }, {
                "name": "B12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 2, 13, 3],
                "bind": {"name": "z3_2"}
            }, {
                "name": "C12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 3, 13, 4],
                "bind": {"name": "z3_3"}
            }, {
                "name": "D12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 4, 13, 5],
                "bind": {"name": "z3_4"}
            }, {
                "name": "E12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 5, 13, 6],
                "bind": {"name": "z3_5"}
            }, {
                "name": "F12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 6, 13, 8],
                "bind": {"name": "z3¨5_1"}
            }, {
                "name": "H12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 8, 13, 9],
                "bind": {"name": "z3_7"}
            }, {
                "name": "I12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 9, 13, 10],
                "bind": {"name": "z3¨9_1"}
            }, {
                "name": "J12",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [12, 10, 13, 11],
                "bind": {"name": "z3_9","format":"testFmt(v)"}
            }, {
                "name": "A13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 1, 14, 2],
                "bind": {"name": "z4_1"}
            }, {
                "name": "B13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 2, 14, 3],
                "bind": {"name": "z4_2"}
            }, {
                "name": "C13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 3, 14, 4],
                "bind": {"name": "z4_3"}
            }, {
                "name": "D13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 4, 14, 5],
                "bind": {"name": "z4_4"}
            }, {
                "name": "E13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 5, 14, 6],
                "bind": {"name": "z4_5"}
            }, {
                "name": "F13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 6, 14, 8],
                "bind": {"name": "z4¨5_1"}
            }, {
                "name": "H13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 8, 14, 9],
                "bind": {"name": "z4_7"}
            }, {
                "name": "I13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 9, 14, 10],
                "bind": {"name": "z4¨9_1"}
            }, {
                "name": "J13",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [13, 10, 14, 11],
                "bind": {"name": "z4_9"}
            }, {
                "name": "A14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 1, 15, 2],
                "bind": {"name": "z5_1"}
            }, {
                "name": "B14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 2, 15, 3],
                "bind": {"name": "z5_2"}
            }, {
                "name": "C14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 3, 15, 4],
                "bind": {"name": "z5_3"}
            }, {
                "name": "D14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 4, 15, 5],
                "bind": {"name": "z5_4"}
            }, {
                "name": "E14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 5, 15, 6],
                "bind": {"name": "z5_5"}
            }, {
                "name": "F14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 6, 15, 8],
                "bind": {"name": "z5¨5_1"}
            }, {
                "name": "H14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 8, 15, 9],
                "bind": {"name": "z5_7"}
            }, {
                "name": "I14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 9, 15, 10],
                "bind": {"name": "z5¨9_1"}
            }, {
                "name": "J14",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [14, 10, 15, 11],
                "bind": {"name": "z5_9"}
            }, {
                "name": "A15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 1, 16, 2],
                "bind": {"name": "z6_1"}
            }, {
                "name": "B15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 2, 16, 3],
                "bind": {"name": "z6_2"}
            }, {
                "name": "C15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 3, 16, 4],
                "bind": {"name": "z6_3"}
            }, {
                "name": "D15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 4, 16, 5],
                "bind": {"name": "z6_4"}
            }, {
                "name": "E15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 5, 16, 6],
                "bind": {"name": "z6_5"}
            }, {
                "name": "F15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 6, 16, 8],
                "bind": {"name": "z6¨5_1"}
            }, {
                "name": "H15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 8, 16, 9],
                "bind": {"name": "z6_7"}
            }, {
                "name": "I15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 9, 16, 10],
                "bind": {"name": "z6¨9_1"}
            }, {
                "name": "J15",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [15, 10, 16, 11],
                "bind": {"name": "z6_9"}
            }, {
                "name": "A16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 1, 17, 2],
                "bind": {"name": "z7_1"}
            }, {
                "name": "B16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 2, 17, 3],
                "bind": {"name": "z7_2"}
            }, {
                "name": "C16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 3, 17, 4],
                "bind": {"name": "z7_3"}
            }, {
                "name": "D16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 4, 17, 5],
                "bind": {"name": "z7_4"}
            }, {
                "name": "E16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 5, 17, 6],
                "bind": {"name": "z7_5"}
            }, {
                "name": "F16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 6, 17, 8],
                "bind": {"name": "z7¨5_1"}
            }, {
                "name": "H16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 8, 17, 9],
                "bind": {"name": "z7_7"}
            }, {
                "name": "I16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 9, 17, 10],
                "bind": {"name": "z7¨9_1"}
            }, {
                "name": "J16",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [16, 10, 17, 11],
                "bind": {"name": "z7_9"}
            }, {
                "name": "A17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 1, 18, 2],
                "bind": {"name": "z8_1"}
            }, {
                "name": "B17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 2, 18, 3],
                "bind": {"name": "z8_2"}
            }, {
                "name": "C17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 3, 18, 4],
                "bind": {"name": "z8_3"}
            }, {
                "name": "D17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 4, 18, 5],
                "bind": {"name": "z8_4"}
            }, {
                "name": "E17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 5, 18, 6],
                "bind": {"name": "z8_5"}
            }, {
                "name": "F17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 6, 18, 8],
                "bind": {"name": "z8¨5_1"}
            }, {
                "name": "H17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 8, 18, 9],
                "bind": {"name": "z8_7"}
            }, {
                "name": "I17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 9, 18, 10],
                "bind": {"name": "z8¨9_1"}
            }, {
                "name": "J17",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [17, 10, 18, 11],
                "bind": {"name": "z8_9"}
            }, {
                "name": "A18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 1, 19, 2],
                "bind": {"name": "z9_1"}
            }, {
                "name": "B18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 2, 19, 3],
                "bind": {"name": "z9_2"}
            }, {
                "name": "C18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 3, 19, 4],
                "bind": {"name": "z9_3"}
            }, {
                "name": "D18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 4, 19, 5],
                "bind": {"name": "z9_4"}
            }, {
                "name": "E18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 5, 19, 6],
                "bind": {"name": "z9_5"}
            }, {
                "name": "F18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 6, 19, 8],
                "bind": {"name": "z9¨5_1"}
            }, {
                "name": "H18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 8, 19, 9],
                "bind": {"name": "z9_7"}
            }, {
                "name": "I18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 9, 19, 10],
                "bind": {"name": "z9¨9_1"}
            }, {
                "name": "J18",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [18, 10, 19, 11],
                "bind": {"name": "z9_9"}
            }, {
                "name": "A19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 1, 20, 2],
                "bind": {"name": "z10_1"}
            }, {
                "name": "B19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 2, 20, 3],
                "bind": {"name": "z10_2"}
            }, {
                "name": "C19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 3, 20, 4],
                "bind": {"name": "z10_3"}
            }, {
                "name": "D19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 4, 20, 5],
                "bind": {"name": "z10_4"}
            }, {
                "name": "E19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 5, 20, 6],
                "bind": {"name": "z10_5"}
            }, {
                "name": "F19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 6, 20, 8],
                "bind": {"name": "z10¨5_1"}
            }, {
                "name": "H19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 8, 20, 9],
                "bind": {"name": "z10_7"}
            }, {
                "name": "I19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 9, 20, 10],
                "bind": {"name": "z10¨9_1"}
            }, {
                "name": "J19",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [19, 10, 20, 11],
                "bind": {"name": "z10_9"}
            }, {
                "name": "A20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 1, 21, 2],
                "bind": {"name": "z11_1"}
            }, {
                "name": "B20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 2, 21, 3],
                "bind": {"name": "z11_2"}
            }, {
                "name": "C20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 3, 21, 4],
                "bind": {"name": "z11_3"}
            }, {
                "name": "D20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 4, 21, 5],
                "bind": {"name": "z11_4"}
            }, {
                "name": "E20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 5, 21, 6],
                "bind": {"name": "z11_5"}
            }, {
                "name": "F20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 6, 21, 8],
                "bind": {"name": "z11¨5_1"}
            }, {
                "name": "H20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 8, 21, 9],
                "bind": {"name": "z11_7"}
            }, {
                "name": "I20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 9, 21, 10],
                "bind": {"name": "z11¨9_1"}
            }, {
                "name": "J20",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [20, 10, 21, 11],
                "bind": {"name": "z11_9"}
            }, {
                "name": "A21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 1, 22, 2],
                "bind": {"name": "z12_1"}
            }, {
                "name": "B21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 2, 22, 3],
                "bind": {"name": "z12_2"}
            }, {
                "name": "C21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 3, 22, 4],
                "bind": {"name": "z12_3"}
            }, {
                "name": "D21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 4, 22, 5],
                "bind": {"name": "z12_4"}
            }, {
                "name": "E21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 5, 22, 6],
                "bind": {"name": "z12_5"}
            }, {
                "name": "F21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 6, 22, 8],
                "bind": {"name": "z12¨5_1"}
            }, {
                "name": "H21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 8, 22, 9],
                "bind": {"name": "z12_7"}
            }, {
                "name": "I21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 9, 22, 10],
                "bind": {"name": "z12¨9_1"}
            }, {
                "name": "J21",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [21, 10, 22, 11],
                "bind": {"name": "z12_9"}
            }, {
                "name": "A22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 1, 23, 2],
                "bind": {"name": "z13_1"}
            }, {
                "name": "B22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 2, 23, 3],
                "bind": {"name": "z13_2"}
            }, {
                "name": "C22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 3, 23, 4],
                "bind": {"name": "z13_3"}
            }, {
                "name": "D22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 4, 23, 5],
                "bind": {"name": "z13_4"}
            }, {
                "name": "E22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 5, 23, 6],
                "bind": {"name": "z13_5"}
            }, {
                "name": "F22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 6, 23, 8],
                "bind": {"name": "z13¨5_1"}
            }, {
                "name": "H22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 8, 23, 9],
                "bind": {"name": "z13_7"}
            }, {
                "name": "I22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 9, 23, 10],
                "bind": {"name": "z13¨9_1"}
            }, {
                "name": "J22",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [22, 10, 23, 11],
                "bind": {"name": "z13_9"}
            }, {
                "name": "A23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 1, 24, 2],
                "bind": {"name": "z14_1"}
            }, {
                "name": "B23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 2, 24, 3],
                "bind": {"name": "z14_2"}
            }, {
                "name": "C23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 3, 24, 4],
                "bind": {"name": "z14_3"}
            }, {
                "name": "D23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 4, 24, 5],
                "bind": {"name": "z14_4"}
            }, {
                "name": "E23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 5, 24, 6],
                "bind": {"name": "z14_5"}
            }, {
                "name": "F23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 6, 24, 8],
                "bind": {"name": "z14¨5_1"}
            }, {
                "name": "H23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 8, 24, 9],
                "bind": {"name": "z14_7"}
            }, {
                "name": "I23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 9, 24, 10],
                "bind": {"name": "z14¨9_1"}
            }, {
                "name": "J23",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [23, 10, 24, 11],
                "bind": {"name": "z14_9"}
            }, {
                "name": "A24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 1, 25, 2],
                "bind": {"name": "z15_1"}
            }, {
                "name": "B24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 2, 25, 3],
                "bind": {"name": "z15_2"}
            }, {
                "name": "C24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 3, 25, 4],
                "bind": {"name": "z15_3"}
            }, {
                "name": "D24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 4, 25, 5],
                "bind": {"name": "z15_4"}
            }, {
                "name": "E24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 5, 25, 6],
                "bind": {"name": "z15_5"}
            }, {
                "name": "F24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 6, 25, 8],
                "bind": {"name": "z15¨5_1"}
            }, {
                "name": "H24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 8, 25, 9],
                "bind": {"name": "z15_7"}
            }, {
                "name": "I24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 9, 25, 10],
                "bind": {"name": "z15¨9_1"}
            }, {
                "name": "J24",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [24, 10, 25, 11],
                "bind": {"name": "z15_9"}
            }, {
                "name": "A25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 1, 26, 2],
                "bind": {"name": "z16_1"}
            }, {
                "name": "B25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 2, 26, 3],
                "bind": {"name": "z16_2"}
            }, {
                "name": "C25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 3, 26, 4],
                "bind": {"name": "z16_3"}
            }, {
                "name": "D25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 4, 26, 5],
                "bind": {"name": "z16_4"}
            }, {
                "name": "E25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 5, 26, 6],
                "bind": {"name": "z16_5"}
            }, {
                "name": "F25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 6, 26, 8],
                "bind": {"name": "z16¨5_1"}
            }, {
                "name": "H25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 8, 26, 9],
                "bind": {"name": "z16_7"}
            }, {
                "name": "I25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 9, 26, 10],
                "bind": {"name": "z16¨9_1"}
            }, {
                "name": "J25",
                "font": {"size": "9pt"},
                "alignment": 18,
                "range": [25, 10, 26, 11],
                "bind": {"name": "z16_9"}
            }, {"text": "f测 =", "font": {"size": "9pt"}, "alignment": 20, "range": [27, 1, 28, 2]}],
        "lines": {
            "rows": [{"rowStart": 1, "colStart": 10, "colEnd": 11, "width": 1}, {
                "rowStart": 2,
                "colStart": 3,
                "colEnd": 6,
                "width": 1
            }, {"rowStart": 2, "colStart": 10, "colEnd": 11, "width": 1}, {
                "rowStart": 4,
                "colStart": 2,
                "colEnd": 6,
                "width": 1
            }, {"rowStart": 4, "colStart": 9, "colEnd": 11, "width": 1}, {
                "rowStart": 5,
                "colStart": 2,
                "colEnd": 6,
                "width": 1
            }, {"rowStart": 5, "colStart": 9, "colEnd": 11, "width": 1}, {
                "rowStart": 6,
                "colStart": 2,
                "colEnd": 6,
                "width": 1
            }, {"rowStart": 7, "colStart": 2, "colEnd": 6, "width": 1}, {
                "rowStart": 7,
                "colStart": 9,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 8, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 9,
                "colStart": 2,
                "colEnd": 5,
                "width": 1
            }, {"rowStart": 10, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 11,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 12, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 13,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 14, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 15,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 16, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 17,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 18, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 19,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 20, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 21,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 22, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 23,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 24, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 25,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }, {"rowStart": 26, "colStart": 1, "colEnd": 11, "width": 1}, {
                "rowStart": 28,
                "colStart": 1,
                "colEnd": 11,
                "width": 1
            }],
            "cols": [{"colStart": 1, "rowStart": 8, "rowEnd": 28, "width": 1}, {
                "colStart": 2,
                "rowStart": 8,
                "rowEnd": 26,
                "width": 1
            }, {"colStart": 3, "rowStart": 9, "rowEnd": 26, "width": 1}, {
                "colStart": 4,
                "rowStart": 9,
                "rowEnd": 26,
                "width": 1
            }, {"colStart": 5, "rowStart": 8, "rowEnd": 26, "width": 1}, {
                "colStart": 6,
                "rowStart": 8,
                "rowEnd": 26,
                "width": 1
            }, {"colStart": 8, "rowStart": 8, "rowEnd": 26, "width": 1}, {
                "colStart": 9,
                "rowStart": 8,
                "rowEnd": 26,
                "width": 1
            }, {"colStart": 10, "rowStart": 1, "rowEnd": 2, "width": 1}, {
                "colStart": 10,
                "rowStart": 8,
                "rowEnd": 26,
                "width": 1
            }, {"colStart": 11, "rowStart": 1, "rowEnd": 2, "width": 1}, {
                "colStart": 11,
                "rowStart": 8,
                "rowEnd": 28,
                "width": 1
            }]
        }
    },
    "data": {
        "BH": "测表3-0011",
        "UNITNAME": "",
        "XMMCFN": "G4216线宁南至攀枝花段高速公路项目",
        "projectName": "G4216线宁南至攀枝花段",
        "QSLCZH": "426332.4",
        "ZZLCZH": "426332.4",
        "uOWnerName": "xx建设单位",
        "uConstructionName": "四川公路桥梁建设集团有限公司",
        "uSupervisorName": "四川XX工地监理实验公司",
        "JCDW": "",
        "SYSHDBH": "",
        "JLHDBH": "",
        "HDBH": "ZCB2-20Test",
        "BDBH": "ZCB2-20Test",
        "sectionName": "ZCB2-20Test",
        "projectUnitName": "钒钛高新区特大桥_主桥",
        "partialName": "右幅_第25号墩台_基础及下部构造",
        "subItemName": "右幅_第25号墩台_2c号_钻孔灌注桩(c-2)",
        "GCBW": "K426+441.16右幅_第25号墩台_2c号_钻孔灌注桩(c-2)",
        "DWGCBW": "钒钛高新区特大桥_主桥 K426+441.16右幅_第25号墩台_2c号_钻孔灌注桩(c-2)",
        "stakeName": "K426+441.16右幅_第25号墩台_2c号_钻孔灌注桩(c-2)"
    }
};