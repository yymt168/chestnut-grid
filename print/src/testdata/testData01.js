/**
 * @Author yymt
 * @Date 2021/1/22 11:23
 * @Version 1.0
 */
let record={
    version:'1.0',
    id:'1',
    defines:{
        dataTypes:{

        },

        //默认string类型
        dataStruct:{
            behindH:'float',
            middleH:'float',
            frontH:'float',
            sightH:'float',
            levelH:'float',
            designH:'float',
            offsetH:'float',
            levelRemark:'float',
        },
        fns:[['fnSub','a','b','return a-b;']],//定义函数,以fn开头:[],
        formats:[['fmtTest','v','return v+"hello,world!";']],//格式化输出函数，以fmt开头
        calcs:["z1_5=z1_2-z1_4","z2_5=fnSub(z2_2,z2_4)"],//计算表达式，[],
    },
    sheets:[
        {
            name:'',
            //direction:0 //纸张方向，纵向0，横向1
            paper:{unit:'mm', size:'A4', width:210, height:297, left:20, right:25, top:20, bottom:15, direction:0},
            cols: [75, 68, 68, 66, 72, 37, 25, 65, 84, 103],
            rows: [29, 46, 23, 23, 23, 23, 23, 32, 31, 31, 31, 33, 33, 34, 35, 35, 35, 38, 38, 40, 37, 41, 43, 43, 44, 26, 47, 32, 32],
            cells:{
                //固定 [range,text,alignment,font,isHtml]
                fixes:[[[1,6,2,10],"高速公路工程项目",33,{"size":"13pt"}],[[2,1,3,11],"水准测量记录表",18,{"size":"17pt","weight":"bold"}],[[3,1,4,2],"承包单位：",36,{"size":"9pt"}],[[3,8,4,9],"合同号：",36,{"size":"9pt"}],[[4,1,5,2],"监理单位：",36,{"size":"9pt"}],[[4,8,5,9],"编 号：",36,{"size":"9pt"}],[[5,1,6,2],"工程名称：",36,{"size":"9pt"}],[[5,9,6,10],null,18,{"size":"9pt"}],[[5,10,6,11],null,18,{"size":"9pt"}],[[6,1,7,2],"工程部位：",36,{"size":"9pt"}],[[6,8,7,9],"检测日期：",36,{"size":"9pt"}],[[7,1,8,11],"测表3",20,{"size":"9pt"}],[[8,1,10,2],"测点",18,{"size":"9pt"}],[[8,2,9,5],"水准尺读数",18,{"size":"9pt"}],[[8,5,10,6],"视线高",18,{"size":"9pt"}],[[8,6,10,8],"高程(m)",18,{"size":"9pt"}],[[8,8,10,9],"设计高程\r\n(m)",18,{"size":"9pt"}],[[8,9,10,10],"偏差值(mm)",18,{"size":"9pt"}],[[8,10,10,11],"备注",18,{"size":"9pt"}],[[9,2,10,3],"后视",18,{"size":"9pt"}],[[9,3,10,4],"中间点",18,{"size":"9pt"}],[[9,4,10,5],"前视",18,{"size":"9pt"}],[[26,1,27,11],"备注：",17,{"size":"9pt"}],[[27,3,28,5],"f容 = ±√n = ±√",20,{"size":"9pt"}],[[28,1,29,2],"测量：",20,{"size":"9pt"}],[[28,5,29,6],null,18,{"size":"9pt"}],[[28,6,29,9],"计算：",20,{"size":"9pt"}],[[29,1,30,2],"复核：",20,{"size":"9pt"}],[[29,6,30,9],"测量工程师：",20,{"size":"9pt"}],[[27,1,28,2],"f测 =",20,{"size":"9pt"}]],

                //绑定单元格[range,[[bindName1,bindName2,...],'formatFunctionName,YYmmDD'],alignment,font,isHtml]
                //'formatFunctionName,YYmmDD' ----> formatFunctionName(bindName1,bindName2,...,'YYmmDD')
                binds:[[[1,3,2,6],[["projectName"]],34,{"size":"13pt"}],[[1,10,2,11],[["µ1"]],18,{"size":"13pt"}],[[3,9,4,11],[["sectionName"]],33,{"size":"9pt"}],[[4,9,5,11],[["BH"]],33,{"size":"9pt"}],[[6,2,7,6],[["stakeName"]],33,{"size":"9pt"}],[[27,2,28,3],[["x¨2"]],17,{"size":"9pt"}],[[27,5,28,6],[["x¨3"]],17,{"size":"9pt"}],[[27,6,28,11],[["x¨1"]],17,{"size":"9pt"}],[[28,2,29,5],[["TBR"]],18,{"size":"9pt"}],[[28,9,29,11],[["TBR¨2"]],18,{"size":"9pt"}],[[29,2,30,5],[["TBR¨1"]],18,{"size":"9pt"}],[[29,9,30,11],[["TBR¨3"]],18,{"size":"9pt"}],[[3,2,4,6],[["uConstructionName"]],33,{"size":"9pt"}],[[4,2,5,6],[["uSupervisorName"]],33,{"size":"9pt"}],[[5,2,6,6],[["projectUnitName"]],33,{"size":"9pt"}],[[6,9,7,11],[["TBRQ"]],33,{"size":"9pt"}]],
                //[count,offsetRange,[[,...第一行(或第一列)bind单元格]]]
                genBinds:[
                    [16,[1,0,1,0],[
                        [[10,1,11,2],[["pointName_[i]"]],18,{"size":"9pt"}],
                        [[10,2,11,3],[["behindH_[i]"]],18,{"size":"9pt"}],
                        [[10,3,11,4],[["middleH_[i]"]],18,{"size":"9pt"}],
                        [[10,4,11,5],[["frontH_[i]"]],18,{"size":"9pt"}],
                        [[10,5,11,6],[["sightH_[i]"]],18,{"size":"9pt"}],
                        [[10,6,11,8],[["levelH_[i]"]],18,{"size":"9pt"}],
                        [[10,8,11,9],[["designH_[i]"]],18,{"size":"9pt"}],
                        [[10,9,11,10],[["offsetH_[i]"]],18,{"size":"9pt"}],
                        [[10,10,11,11],[["levelRemark_[i]"]],18,{"size":"9pt"}],
                        ]
                    ]
                ],

                //附加
                attaches:[],
            },
            //rowStart,colStart,rowEnd,colEnd,width
            lines:[[1,10,1,11],[2,3,2,6],[2,10,2,11],[4,2,4,6],[4,9,4,11],[5,2,5,6],[5,9,5,11],[6,2,6,6],[7,2,7,6],[7,9,7,11],[8,1,8,11],[9,2,9,5],[10,1,10,11],[11,1,11,11],[12,1,12,11],[13,1,13,11],[14,1,14,11],[15,1,15,11],[16,1,16,11],[17,1,17,11],[18,1,18,11],[19,1,19,11],[20,1,20,11],[21,1,21,11],[22,1,22,11],[23,1,23,11],[24,1,24,11],[25,1,25,11],[26,1,26,11],[28,1,28,11],[8,1,28,1],[8,2,26,2],[9,3,26,3],[9,4,26,4],[8,5,26,5],[8,6,26,6],[8,8,26,8],[8,9,26,9],[1,10,2,10],[8,10,26,10],[1,11,2,11],[8,11,28,11]],

        }
    ],
    /*分页；
    get(data,pageNo,columnName),
    set(data,pageNo,columnName,value),
    getTotalPage(data),
    getSheet(sheets,totalPage,pageNo)
    insertPage(data,pageNo)
    deletePage(data,pageNo)
    */
    pagination:{},
    data:{

    },
    editable:{
        all:true,
        except:{

        }
    }
};
export default record;

