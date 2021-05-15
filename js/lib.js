const lang = new function()
{
    this.language = "ko";

    this.dictionary = {
        "popup":
        {
            ko:"팝업 차단을 해제해 주세요.",
            en:"Please turn off popup block",
            ja:"ポップアップウィンドウのブロックを解除してください"
        },
        "setting":
        {
            ko:"설정",
            en:"Settings",
            ja:"設定"
        },
        "color-role-a":
        {
            ko:"막대 끝 색상"
        },
        "color-role-b":
        {
            ko:"아이콘 배경 색상"
        },
        "color-role-c":
        {
            ko:"막대 시작 색상"
        },
        "color-role-d":
        {
            ko:"아이콘 장식 색상"
        },
        "role-me":
        {
            ko:"자신"
        },
        "role-tanker":
        {
            ko:"방어 역할"
        },
        "role-healer":
        {
            ko:"회복 역할"
        },
        "role-dps":
        {
            ko:"공격 역할"
        },
        "role-pld":
        {
            ko:"검술사・나이트"
        },
        "role-war":
        {
            ko:"도끼술사・전사"
        },
        "role-drk":
        {
            ko:"암흑기사"
        },
        "role-gnb":
        {
            ko:"건브레이커"
        },
        "role-whm":
        {
            ko:"환술사・백마도사"
        },
        "role-sch":
        {
            ko:"학자"
        },
        "role-ast":
        {
            ko:"점성술사"
        },
        "role-mnk":
        {
            ko:"격투사・몽크"
        },
        "role-drg":
        {
            ko:"창술사・용기사"
        },
        "role-nin":
        {
            ko:"쌍검사・닌자"
        },
        "role-sam":
        {
            ko:"사무라이"
        },
        "role-brd":
        {
            ko:"궁술사・음유시인"
        },
        "role-mch":
        {
            ko:"기공사"
        },
        "role-dnc":
        {
            ko:"무도가"
        },
        "role-blm":
        {
            ko:"흑마도사"
        },
        "role-smn":
        {
            ko:"비술사・소환사"
        },
        "role-rdm":
        {
            ko:"적마도사"
        },
        "role-blu":
        {
            ko:"청마도사"
        }
    };
    this.get = function(k)
    {
        if (this.dictionary.hasOwnProperty(k))
            return this.dictionary[k][this.language];
        else return k;
    }
},
_ = function(e, c = window)
{
    let init = function(elem)
    {
        elem.display = function(style) { elem.style.display = style; }
        elem.css = function(json)
        {
            try
            {
                for(let k in json)
                {
                    let cfj = k.split("-");
                    for (let i = 1; i < cfj.length; i++) cfj[i] = cfj[i].charAt(0).toUpperCase() + cfj[i].slice(1);
                    cfj = cfj.join("");
                    this.style[cfj] = json[k];
                }
            }
            catch (ex) { }
        }
        elem.new = function(type, cls)
        {
            let obj = null;
            if (type) obj = c.document.createElement(type);
            else obj = c.document.createElement("div");

            if (cls)
            {
                if (Array.isArray(cls))
                {
                    try
                    {
                        for(let i of cls) obj.classList.add(i);
                    }
                    catch (ex) { }
                }
                else obj.classList.add(cls);
            }
            elem.append(obj);

            return init(obj);
        }
        elem.find = function(filter) 
        {
            return init(elem.querySelector(filter));
        }
        return elem;
    }

    if (e && typeof e === "string")
    {
        let obj = c.document.querySelectorAll(e);
        if (obj == null) return null;
        if (obj.length > 1)
        {
            let org = obj;
            obj = obj[0];
            obj.all = org;
            obj.get = function(i)
            {
                if (i < 0)  return init(org[i]);
                else return init(org[org.length + i]);
            }
        }
        else obj = obj[0];
        return init(obj);
    }
    else if (e.constructor.toString().indexOf("HTML") > -1 && e.constructor.toString().indexOf("Element") > -1)
    {
        return init(e);
    }
    else console.warn("No Matched Element");
    return null;
},
version = {major:0, minor:1, patch:1, label:"beta", patchname:"Bayer designation"},
svglib = {
    "cover":[
        {
            type:"path",
            d:"M14,0C6.268,0,0,6.268,0,14c0,7.732,6.268,14,14,14s14-6.268,14-14C28,6.268,21.731,0,14,0z M14,26 c-6.627,0-12-5.372-12-12C2,7.373,7.373,2,14,2c6.626,0,12,5.373,12,12C26,20.627,20.625,26,14,26z"
        }
    ],
    "limitbreak":[
        {
            type:"path",
            d:"M21,19.5c-0.5,0-2-1.5-2.5-2s-0.5-1-0.5-1l1.5-2l-0.5-1L17,16c0-1.5-0.5-1.5-1-1.5 c-0.224,0-1.352-1.205-2.707-2.713C15.184,9.816,17.229,7.771,17.5,7.5C18,7,20,6,20,5.5S20,4,20,4s-1,0-1.5,0s-1.5,2-2,2.5 c-0.27,0.269-2.273,2.273-4.225,4.147C10.863,9.06,9.387,7.387,8.5,6.5c-2-2-6-4-6-4s2,4,4,6c0.877,0.877,2.525,2.333,4.098,3.731 C9.608,13.148,8.802,13.849,8.5,14c-1,0.5-2.5,1.5-2.5,0.5s-1-1-1.5-1s-1,0.5-1,1.5s2,1,1.5,1.5s-0.5,0-1,1s-0.5,2,0,2.5 s1.5,0.5,2.5,0s0.5-0.5,1-1S8,20.5,9,20.5s1.5-0.5,1.5-1s0-1.5-1-1.5s0-1.5,0.5-2.5c0.154-0.309,0.884-1.146,1.832-2.166 C13.319,14.671,14.5,15.778,14.5,16c0,0.5,0,1,1.5,1l-2.5,2l1,0.5l2-1.5c0,0,0.5,0,1,0.5s2,2,2,2.5s0.5,1,1.5,0S21.5,19.5,21,19.5z"
        }
    ],
    "iconinner":[
        {
            type:"path",
            d:"M14,1C6.82,1,1,6.82,1,14s5.82,13,13,13s13-5.82,13-13S21.18,1,14,1z M14,25C7.925,25,3,20.075,3,14S7.925,3,14,3 s11,4.925,11,11S20.075,25,14,25z"
        }
    ],
    "coverbg":[
        {
            type:"circle", 
            cx:"14", 
            cy:"14", 
            r:"13"
        }
    ],
    "coverright":[
        {
            type:"path",
            d:"M46,18h-9.285L39,14L31,0h-9.26C26.663,2.729,30,7.973,30,14s-3.337,11.271-8.261,14H46c0.553,0,1-0.447,1-1 v-8C47,18.448,46.553,18,46,18z"
        }
    ],
    "coverrightorg":[
        {
            type:"path",
            d:"M31,0h-9.26C26.663,2.728,30,7.973,30,14s-3.337,11.271-8.261,14H31l8-14L31,0z"
        }
    ],
    "barclip":[
        {
            type:"polygon",
            // points:"0,0 4088,0 4096,14 4088,28 0,28"
            points:"8,0 4096,0 4096,28 8,28 0,14"
        }
    ],
    "resizer":[
        {
            type:"polygon",
            points:"16,1 1,16 4,16 16,4"
        },
        {
            type:"polygon",
            points:"16,6 6,16 9,16 16,9"
        },
        {
            type:"polygon",
            points:"16,11 11,16 14,16 16,14"
        }
    ],
    "number_0":[
        {
            type:"path",
            d:"M7.5,0C3.771,0,0.75,2.686,0.75,6v20c0,3.313,3.021,6,6.75,6s6.75-2.687,6.75-6V6 C14.25,2.686,11.229,0,7.5,0z M7.5,28c-1.242,0-2.25-0.896-2.25-2V6c0-1.104,1.008-2,2.25-2s2.25,0.896,2.25,2v20 C9.75,27.104,8.742,28,7.5,28z"
        }
    ],
    "number_1":[
        {
            type:"polygon",
            points:"5.25,6 5.25,31.333 9.75,31.333 9.75,0.667 6,0.667 0,4.667 0,9.333"
        }
    ],
    "number_2":[
        {
            type:"path",
            d:"M14.25,9.333V6c0-3.314-3.021-6-6.75-6S0.75,2.686,0.75,6v4.667h4.5V6c0-1.104,1.008-2,2.25-2 s2.25,0.896,2.25,2v3.333c0,0,0,3.334-4.5,8.667s-4.5,9.333-4.5,9.333v4H13.5v-4H5.25c0,0,0-2.666,4.5-8.666 S14.25,9.333,14.25,9.333z"
        }
    ],
    "number_3":[
        {
            type:"path",
            d:"M14.25,10V6c0-3.314-3.021-6-6.75-6S0.75,2.686,0.75,6v4.667h4.5V6c0-1.104,1.008-2,2.25-2 s2.25,0.896,2.25,2v5.333c0,1.105-1.008,2-2.25,2H5.25v4H7.5c1.242,0,2.25,0.896,2.25,2V26c0,1.104-1.008,2-2.25,2 s-2.25-0.896-2.25-2l0,0v-4.667l0,0h-4.5v4.661c0,0.002,0,0.004,0,0.006c0,3.313,3.021,6,6.75,6s6.75-2.687,6.75-6v-5.333 c0-2.33-1.498-4.341-3.68-5.334C12.752,14.341,14.25,12.329,14.25,10z"
        }
    ],
    "number_4":[
        {
            type:"path",
            d:"M12,20.667v-20H6L0,20v4h8.25v7.333H12V24h3v-3.333H12z M8.25,20.667h-4.5l4.5-16V20.667z"
        }
    ],
    "number_5":[
        {
            type:"path",
            d:"M9,11.333H8.25c-1.232,0-2.316,0.536-3,1.352V4.667h7.5v-4h-12v16.667h4.5v-0.666c0-1.104,1.007-2,2.25-2 s2.25,0.896,2.25,2V26c0,1.104-1.008,2-2.25,2s-2.25-0.896-2.25-2v-2.667h-4.5V26c0,3.313,3.021,6,6.75,6s6.75-2.687,6.75-6V16 C14.25,13.423,11.898,11.333,9,11.333z"
        }
    ],
    "number_6":[
        {
            type:"path",
            d:"M14.25,9.333V6c0-3.314-3.021-6-6.75-6S0.75,2.686,0.75,6v20c0,3.313,3.021,6,6.75,6s6.75-2.687,6.75-6 v-9.333C14.25,14.09,11.898,12,9,12H8.25c-1.232,0-2.316,0.536-3,1.352V6c0-1.104,1.008-2,2.25-2s2.25,0.896,2.25,2v3.333H14.25z M7.5,15.333c1.243,0,2.25,0.896,2.25,2V26c0,1.104-1.008,2-2.25,2s-2.25-0.896-2.25-2v-8.667C5.25,16.229,6.257,15.333,7.5,15.333z"
        }
    ],
    "number_7":[
        {
            type:"polygon",
            points:"0.778,0 0.778,4.174 9.333,4.174 0,31.305 0,32 4.667,32 14,4.174 14,0"
        }
    ],
    "number_8":[
        {
            type:"path",
            d:"M14.25,9.651v-4h-0.02C14.025,2.5,11.096,0,7.5,0S0.975,2.5,0.77,5.651H0.75v4c0,2.092,1.209,3.928,3.036,5 c-1.827,1.072-3.036,2.908-3.036,5V26c0,3.313,3.021,6,6.75,6s6.75-2.687,6.75-6v-6.349c0-2.092-1.209-3.928-3.035-5 C13.041,13.579,14.25,11.743,14.25,9.651z M5.25,6c0-1.104,1.008-2,2.25-2s2.25,0.896,2.25,2v4.984c0,1.104-1.008,2-2.25,2 s-2.25-0.896-2.25-2V6z M9.75,26c0,1.104-1.008,2-2.25,2s-2.25-0.896-2.25-2v-7.683c0-1.104,1.008-2,2.25-2s2.25,0.896,2.25,2V26z"
        }
    ],
    "number_9":[
        {
            type:"path",
            d:"M0.75,22.667V26c0,3.313,3.021,6,6.75,6s6.75-2.687,6.75-6V6c0-3.314-3.021-6-6.75-6S0.75,2.686,0.75,6 v9.333C0.75,17.91,3.102,20,6,20h0.75c1.232,0,2.316-0.536,3-1.352V26c0,1.104-1.008,2-2.25,2s-2.25-0.896-2.25-2v-3.333H0.75z M7.5,16.667c-1.243,0-2.25-0.896-2.25-2V6c0-1.104,1.008-2,2.25-2s2.25,0.896,2.25,2v8.667C9.75,15.771,8.743,16.667,7.5,16.667z"
        }
    ],
    "colon":[
        {
            type:"rect",
            x:"2",
            y:"6",
            width:"4",
            height:"6"
        },
        {
            type:"rect",
            x:"2",
            y:"20",
            width:"4",
            height:"6"
        }
    ],
    "setting":[
        {
            type:"path",
            d:"M20.583,10.375h-1.079c-0.074-0.212-0.16-0.417-0.256-0.618l0.764-0.763l0.5-1.503l-2.003-2.003l-1.503,0.5l-0.763,0.764 c-0.201-0.096-0.406-0.182-0.618-0.256V5.417L14.917,4h-2.833l-0.708,1.417v1.079c-0.211,0.075-0.417,0.16-0.617,0.256L9.994,5.988 L8.492,5.487L6.488,7.491l0.501,1.502l0.763,0.763c-0.096,0.201-0.182,0.407-0.257,0.619H6.417L5,11.083v2.833l1.417,0.708h1.079 c0.075,0.212,0.16,0.417,0.256,0.618l-0.763,0.763l-0.501,1.502l2.003,2.004l1.502-0.501l0.763-0.763 c0.2,0.096,0.406,0.182,0.618,0.256v1.079L12.083,21h2.833l0.708-1.417v-1.079c0.212-0.074,0.418-0.16,0.618-0.256l0.763,0.764 l1.504,0.5l2.003-2.003l-0.501-1.503l-0.764-0.764c0.097-0.2,0.182-0.406,0.256-0.617h1.079L22,13.917v-2.833L20.583,10.375z M13.5,16.042c-1.956,0-3.542-1.585-3.542-3.542s1.585-3.542,3.542-3.542s3.541,1.585,3.541,3.542S15.456,16.042,13.5,16.042z"
        },
        {
            type:"path",
            d:"M26.295,21.42c0.013-0.182,0.016-0.364,0.01-0.55l0.825-0.327L28,19.571l-0.858-2.169l-1.299-0.113l-0.827,0.326 c-0.121-0.139-0.248-0.27-0.383-0.395l0.353-0.816l-0.07-1.302l-2.142-0.928l-0.999,0.839l-0.354,0.815 c-0.182-0.013-0.366-0.016-0.552-0.01l-0.274-0.695h-0.747c-0.001,0.002-0.002,0.005-0.003,0.007l0.604,0.604l0.636,1.908 l-0.552,0.552c1.344-0.248,2.72,0.477,3.241,1.794c0.592,1.497-0.142,3.192-1.64,3.784c-1.498,0.593-3.192-0.141-3.785-1.639 c-0.284-0.719-0.256-1.48,0.008-2.146l-1.622-0.539l-0.604-0.604c-0.002,0.001-0.005,0.002-0.007,0.003v0.854L15.66,20.63 l0.169,0.073c-0.013,0.182-0.016,0.366-0.009,0.551l-0.589,0.233L15.225,21.5h-0.026l-0.205,0.081l-0.871,0.972l0.858,2.169 l1.3,0.114l0.826-0.327c0.121,0.14,0.249,0.271,0.383,0.396l-0.354,0.815l0.072,1.304l2.141,0.927l0.999-0.84l0.354-0.816 c0.184,0.015,0.366,0.018,0.551,0.01l0.326,0.826L22.553,28l2.169-0.857l0.113-1.301l-0.327-0.826 c0.14-0.121,0.271-0.249,0.396-0.383l0.816,0.354l1.302-0.072l0.927-2.14l-0.838-1.001L26.295,21.42z"
        }
    ],
    "dps":[
        {
            type:"polygon",
            points:"29,26 27,24 26,22 28,20 27,18 24,21 23,21 22,20 23,18 11,8 8,2 2,2 2,8 8,11 18,23 20,22 21,21 21,24 18,27 20,28 22,26 24,27 26,29 26,30 28,30 30,28 30,26"
        }
    ],
    "heal":[
        {
            type:"polygon",
            points:"29,12 21,14 19,13 18,11 20,3 17,2 15,2 12,3 14,11 13,13 11,14 3,12 2,15 2,17 3,20 11,18 13,19 14,21 12,29 15,30 17,30 20,29 18,21 19,19 21,18 29,20 30,17 30,15"
        }
    ],
    "icon-general":
    [
        {
            type:"path",
            d:"M8,17c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S10.209,17,8,17z M8,23c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2 S9.104,23,8,23z"
        },
        {
            type:"path",
            d:"M26,17H13v0.021c1.208,0.914,2,2.348,2,3.979s-0.792,3.064-2,3.979V25h13l2-4L26,17z"
        },
        {
            type:"path",
            d:"M8,7c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S10.209,7,8,7z M8,13c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2 S9.104,13,8,13z"
        },
        {
            type:"path",
            d:"M26,7H13v0.022C14.208,7.936,15,9.37,15,11c0,1.631-0.792,3.064-2,3.978V15h13l2-4L26,7z"
        },
    ],
    "icon-tab":
    [ 
        {type:"path", d:"M28,10H4c-1.104,0-2,0.896-2,2v14c0,1.104,0.896,2,2,2h24c1.104,0,2-0.896,2-2V12C30,10.896,29.104,10,28,10z M28,23H16v3 h-5v-3H9v3H4V12h24V23z"},
        {type:"path", d:"M28,4H4C2.896,4,2,4.896,2,6v1c0,1.104,0.896,2,2,2h24c1.105,0,2-0.896,2-2V6C30,4.896,29.104,4,28,4z M28,7H4V6h24V7z"}, 
    ],
    "icon-info":
    [
        {type:"circle", cx:"8.254", cy:"11.924", r:"1.346"},
        {type:"circle", cx:"13.858", cy:"8.946", r:"1.346"},
        {type:"circle", cx:"23.001", cy:"17.332", r:"1.345"},
        {type:"circle", cx:"18.34", cy:"14.641", r:"2.019"},
        {type:"path", d:"M28.624,8.134l-9.748-5.628l-0.275,0.245l-2.652,4.593c1.935-0.212,4.371,0.184,6.389,2.271 c2.164,2.236,2.461,4.64,2.163,6.382c0.563,0.633,0.693,1.572,0.247,2.345c-0.484,0.839-1.481,1.196-2.368,0.909 c-1.735,1.591-3.63,3.425-3.954,3.985l-1.346,2.33l-1.747-1.009l1.345-2.33c0.519-0.9,2.814-3.072,4.355-4.48 c-0.099-0.47-0.039-0.975,0.22-1.424c0.292-0.506,0.771-0.832,1.299-0.953c0.131-1.106-0.078-2.712-1.664-4.352 c-1.726-1.783-3.73-1.853-5.073-1.619c-0.044,0.19-0.107,0.379-0.209,0.557c-0.191,0.332-0.467,0.583-0.78,0.754l-0.169,6.945 l-0.801,1.388l-1.748-1.009l0.543-0.941l0.156-6.428c-0.931-0.569-1.246-1.777-0.698-2.727c0.373-0.646,1.048-0.999,1.744-1.002 l2.999-5.193l0.073-0.362L16.5,1.135L4.377,8.133v14l3.148,1.818l-1.001,1.734l5.827,3.363l1.001-1.734l3.148,1.818l12.125-7 L28.624,8.134z M16.009,13.295c0.743-1.287,2.388-1.728,3.675-0.984c1.287,0.742,1.729,2.389,0.986,3.676 c-0.743,1.286-2.389,1.727-3.677,0.983C15.707,16.227,15.266,14.582,16.009,13.295z M5.675,19.756l1.865-3.23l-0.181-2.803 c-0.038-0.018-0.078-0.028-0.115-0.05c-0.965-0.557-1.295-1.792-0.738-2.758C7.063,9.95,8.298,9.62,9.263,10.177 c0.965,0.558,1.296,1.792,0.739,2.757c-0.16,0.277-0.38,0.495-0.629,0.66l0.219,3.413l-2.17,3.758L5.675,19.756z M16.026,28.064 L5.539,22.01l0.673-1.166l2.913,1.682l2.018-3.494l4.661,2.69l-2.018,3.495l2.914,1.682L16.026,28.064z"},
    ],
    "icon-other":[
        {type:"path", d:"M18,6h-8C8.896,6,8,6.896,8,8v8c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2V8C20,6.896,19.104,6,18,6z M18,16h-8V8h8V16z"},
        {type:"path", d:"M14,18v-6h6v-2h-6c-1.104,0-2,0.896-2,2v6H14z"},
        {type:"path", d:"M22,10h-1v2h1v8h-8v-1h-2v1c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2v-8C24,10.896,23.104,10,22,10z"},
        {type:"rect", x:"6", y:"24", width:"20", height:"2"} 
    ],
    "icon-expert":[
        {type:"polygon", points:"10.293,21.707 4.586,16 10.293,10.293 11.707,11.707 7.414,16 11.707,20.293 "},
        {type:"polygon", points:"21.707,21.707 20.293,20.293 24.586,16 20.293,11.707 21.707,10.293 27.414,16 "},
        {type:"polygon", points:"15,21 13,21 13,19.938 17,11.605 17,11 19,11 19,12.061 15,20.394 "},
        {type:"path", d:"M28,4H4C2.896,4,2,4.896,2,6v20c0,1.104,0.896,2,2,2h24c1.104,0,2-0.896,2-2V6C30,4.896,29.104,4,28,4z M28,26H4V6h24V26z"}, 
    ],
    "icon-color":[
        {type:"rect", x:"8", y:"8", width:"2", height:"3"},
        {type:"rect", x:"5", y:"11", width:"3", height:"2"},
        {type:"rect", x:"10", y:"11", width:"3", height:"2"},
        {type:"rect", x:"8", y:"13", width:"2", height:"3"},
        {type:"path", d:"M22,5H4C2.896,5,2,5.896,2,7v18c0,1.104,0.896,2,2,2h18c1.104,0,2-0.896,2-2V7C24,5.896,23.104,5,22,5z M4,25V7h18L4,25z"},
        {type:"path", d:"M28,5c-1.104,0-2,0.896-2,2v18c0,1.104,0.896,2,2,2s2-0.896,2-2V7C30,5.896,29.104,5,28,5z M28,10c-0.553,0-1-0.448-1-1 s0.447-1,1-1s1,0.448,1,1S28.553,10,28,10z"},
    ],
    "arrow-down":[{type:"polygon", points:"1,9 7,9 4,15 "}],
    "huepicker":[{type:"path", d:"M23.999,0.001L23.999,0.001L-0.001,0v2H0v4v2h24V6L23.999,0.001L23.999,0.001z M2,6l2-2L2,2h20l-2,2l2,2H2z"}]
},
elementBuilder = {
    default:() => {
        let item = _(document.createElement("div"));
        const
            jobicon =                  item.new("div", "jobicon"),
            /**/cover =             jobicon.new("div", "cover"),
            /**/icon =              jobicon.new(  "i", ["job-icon","xiv-Gla"]),
            tableitems =               item.new("div", "tableitems"),
            /**/upline =         tableitems.new("div", "upline"),
            /*    */name =           upline.new("div", "name"),
            /*    */encdps =         upline.new("div", "mainvalue"),
            /**/downline =       tableitems.new("div", "downline"),
            /*    */maxhit =       downline.new("div", "maxvalue"),
            backguage =                item.new("div", "guage"),
            /**/barprocess =      backguage.new("div", "guage-process");
        
        item.classList.add("tanker");
        name.innerHTML = "Laniakea Supercluster";
        // backguage.setAttribute("data-process", "50");
        // barprocess.setAttribute("style", "--dwidth:50%");
        // barprocess.css({"right":"50%"});
        return item;
    }
}

function createColorEditor(parent, role_tag)
{
    let p = _(parent);
    let list = ["color-role-c", "color-role-a", "color-role-b", "color-role-d"];
    for(let v of list)
    {
        let color_list = p.new("div", "color-list");
        let color_name = color_list.new("div", "color-name");
        let color_edit = color_list.new("div", "color-editor");
        let color_box = color_edit.new("div", "color-box");
        let color_value = color_box.new("div", "color-value");

        // 기본값 설정
        color_value.setAttribute("style", "--background:var(--color-" + role_tag + v.replace("color-role", "") + ");");

        color_edit.addEventListener("click", (e) =>
        {
            let c_style = getComputedStyle(color_value);
            _(".colorpicker").display("block");
            
            let width = _(".colorpicker").getBoundingClientRect().width;
            let height = _(".colorpicker").getBoundingClientRect().height;

            _(".colorpicker").css({"top":"calc(50% - " + (height / 2) + "px)", "left":"calc(50% - " + (width / 2) + "px)"});
            // console.log(c_style.backgroundColor);
        });
        color_name.innerHTML = lang.get(v);
    }
}

function createPreview(target, role, job)
{
    let icon = job.charAt(0).toUpperCase() + job.slice(1);
    let s = elementBuilder.default();
    let rcase = document.createElement("div");
    rcase.classList.add("main-list-area");
    rcase.style.position = "relative";

    s.setAttribute("class", role);    
    s.find("i").setAttribute("class", "job-icon");
    s.find("i").classList.add("xiv-" + icon);
    s.find(".mainvalue").innerHTML = "12345.67";
    s.find(".mainvalue").setAttribute("title", "dps");
    s.find(".maxvalue").innerHTML = "189012";
    s.find(".maxvalue").setAttribute("title", "최대 대미지 스킬 이름");

    s.find(".guage").setAttribute("data-width", "100");
    s.find(".guage-process").setAttribute("style", "right:0%; --dwidth:100%;");
    s.find(".cover").setAttribute("style", "--cdhit:15%; --dhit:30%; --chit:45%");
    s.find(".tableitems").setAttribute("data-perc", "50%");
    s.find(".tableitems").setAttribute("style", "--perc:50%");
    rcase.append(s);

    _("." + target).append(rcase);
}

function buildElement(tag, className, parent)
{
    const e = document.createElement(tag);
    if (className != "") e.classList.add(className);
    if (parent != undefined && parent != null) parent.append(e);
    return e;
}

function initCombatent(person)
{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("name");
    /* elements */
    const 
    job_ico_class = "xiv-" + ((person.name == "Limit Break" && person.Job == "") ? "lb_icon" : person.Job),
    container          = buildElement("div", ""               , document.querySelector(".content")),
        jobicon        = buildElement("div", "jobicon"        , container),
        /**/cover      = buildElement("div", "cover"          , jobicon),
        /**/icon       = buildElement(  "i", job_ico_class, jobicon),
        tableitems     = buildElement("div", "tableitems"     , container),
        /**/upline     = buildElement("div", "upline"         , tableitems),
        /*    */name   = buildElement("div", "name"           , upline),
        /**/downline   = buildElement("div", "downline"       , tableitems),
        backguage      = buildElement("div", "guage"          , container),
        /**/barprocess = buildElement("div", "guage-process"  , backguage),

        /*    */encdps = buildElement("div", "encdps"         , upline),
        /*    */maxhit = buildElement("div", "maxhit"         , downline);

    container.setAttribute("data-name", person.name.replace("'", "_"));
    encdps.setAttribute("title", "dps");

    if (c != undefined && c == "hide" && person.name != "YOU") name.style.filter = "blur(3px)";
}

document.addEventListener("DOMContentLoaded", () =>
{
    for(let i in svglib)
    {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', "clipPath");
        svg.setAttribute("id", i);
        for(let z in svglib[i])
        {
            let elem = document.createElementNS('http://www.w3.org/2000/svg', svglib[i][z].type);
            for(let obj in svglib[i][z])
            {
                if (obj == "type") continue;
                elem.setAttribute(obj, svglib[i][z][obj]);
            }
            svg.appendChild(elem);
        }
        document.querySelector("svg").appendChild(svg);
    }
});