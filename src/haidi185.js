// https://juejin.cn/game/haidijuejin/?utm_campaign=hdjjgame&utm_medium=user_center
// ····················自定义区域·START···················
// 你的uid
let uid = '1645324066372430';
// request header 中的 authorization
let authorization = 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsInNvdXJjZSI6Imp1ZWppbiJ9.eyJleHBpcmVBdCI6MTY1MDQxNjQxMywidXNlcklkIjoiMTY0NTMyNDA2NjM3MjQzMCIsImlhdCI6MTY0NzgyNDQxMywiZXhwIjoxNjUwNDE2NDEzfQ.F_knaGvs16-WtiyGg_TJhvhCrD0Sz6yDfrQNtA1RSh7cIv6rdlWLAP1sKXTpMqVekBdTHTU-M6B69AgJL2xDy9SUNjtbjiuiqA6kzYhhGpZL4AL2kuLFCbZtN4g7rETxg4Sw74LBbE74r8C_niPr7QL2wRdqFjVI3W5YbX2CiV8KTTRba2P_LgS7g523HMiZ3NroOitV6paRTIVAcTIU3HVI_RgSnruhcEgrtcfmG8dEy86VLTzV7XX-556rccKuGj8vyEn_thVO_V2z03ewDIE4MBC_XYoqixahUuoo_t3d7_xCiCeg-7E60AYwVaNsoA-eHn62WDvNblmOJ1HanQ\n';
// request header 中的 x-tt-gameid
let gameid = 'x-tt-gameid: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYW1lSWQiOiIyMDIyLTAyLTI3IDIzOjI0OjAyICswODowMCIsInRpbWUiOiIxNjQ3ODI0NDI5NDA1IiwiaWF0IjoxNjQ3ODI0NDI5LCJleHAiOjE2NTA0MTY0Mjl9.Ovfs9QDeyc1dMxlnDzPLOaU5W8MkIPQoK_BrALnWuaHDnBksHeLXgUn_aCh81xJpv1Y4KNZq3toV13viSSbTFA\n'

authorization = authorization.replaceAll("authorization: ","").replaceAll("\n", "");
gameid = gameid.replaceAll("x-tt-gameid: ", "").replaceAll("\n", "");
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function letUsGoALl(){
    console.log(1,'test')
    await (async function letUsGo(){
        // 0:开局往左 1:开局往右 2:中期 3:后期飞翔 4:后期扫荡
        let commandStep = 0;
        // ····················自定义区域·END·····················

        let commandArr = [
            // 开局往左
            [{"times":10,"command":["2","L","D","L","4","D","6","R","D","R"]}],
            // 开局往右
            [{"times":10,"command":["2","R","D","R","6","D","4","L","D","L"]}],
            // 中期
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：万米飞翔
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：无情扫荡
            [{"times":10,"command":["L","L","L","4","L","L","L","4","D","R","R","R","6","R","R","R","6"]},{"times":3,"command":["U","U","L","L","8","4"]},{"times":6,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D",{"times":10,"command":["R","R","R","6","R","R","R","6","D","L","L","L","4","L","L","L","4"]},{"times":3,"command":["U","U","R","R","8","6"]},{"times":6,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]
        ];
        let coreCode = commandArr[commandStep];
        let loop = commandStep <= 1 ? 2 : 4;
        let params = {"command": []};
        let linshiyinyong = params;
        for (let i = 0;i<loop;i++){
            linshiyinyong['command'].push({"times": 10, "command": []});
            linshiyinyong = linshiyinyong.command[0];
            if (i >= loop-1) {
                linshiyinyong.command.push(...coreCode);
            }
        }
        linshiyinyong = null;
        let datarus = await fetch('https://juejin-game.bytedance.com/game/sea-gold/game/command?uid=' + uid + '&time=' + Date.parse(new Date()), {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': authorization,
                'accept': 'application/json, text/plain, */*',
                'content-length': JSON.stringify(params).length,
                'x-tt-gameid': gameid,
            },
            body: JSON.stringify(params)
        }).then(async (res) => {
            return res.json();
            console.log(1.1,res)
        });
        return datarus;
    })();
    await sleep(2000);
    console.log(2,'test')
    await (async function letUsGo(){
        // 0:开局往左 1:开局往右 2:中期 3:后期飞翔 4:后期扫荡
        let commandStep = 2;
        // ····················自定义区域·END·····················

        let commandArr = [
            // 开局往左
            [{"times":10,"command":["2","L","D","L","4","D","6","R","D","R"]}],
            // 开局往右
            [{"times":10,"command":["2","R","D","R","6","D","4","L","D","L"]}],
            // 中期
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：万米飞翔
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：无情扫荡
            [{"times":10,"command":["L","L","L","4","L","L","L","4","D","R","R","R","6","R","R","R","6"]},{"times":3,"command":["U","U","L","L","8","4"]},{"times":6,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D",{"times":10,"command":["R","R","R","6","R","R","R","6","D","L","L","L","4","L","L","L","4"]},{"times":3,"command":["U","U","R","R","8","6"]},{"times":6,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]
        ];
        let coreCode = commandArr[commandStep];
        let loop = commandStep <= 1 ? 2 : 4;
        let params = {"command": []};
        let linshiyinyong = params;
        for (let i = 0;i<loop;i++){
            linshiyinyong['command'].push({"times": 10, "command": []});
            linshiyinyong = linshiyinyong.command[0];
            if (i >= loop-1) {
                linshiyinyong.command.push(...coreCode);
            }
        }
        linshiyinyong = null;
        let datarus = await fetch('https://juejin-game.bytedance.com/game/sea-gold/game/command?uid=' + uid + '&time=' + Date.parse(new Date()), {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': authorization,
                'accept': 'application/json, text/plain, */*',
                'content-length': JSON.stringify(params).length,
                'x-tt-gameid': gameid,
            },
            body: JSON.stringify(params)
        }).then(async (res) => {
            console.log(2.1,res)
            return res.json();
        });
        return datarus;
    })();
    await sleep(2000);
    console.log(3,'test')
    await (async function letUsGo(){
        // 0:开局往左 1:开局往右 2:中期 3:后期飞翔 4:后期扫荡
        let commandStep = 3;
        // ····················自定义区域·END·····················

        let commandArr = [
            // 开局往左
            [{"times":10,"command":["2","L","D","L","4","D","6","R","D","R"]}],
            // 开局往右
            [{"times":10,"command":["2","R","D","R","6","D","4","L","D","L"]}],
            // 中期
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：万米飞翔
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：无情扫荡
            [{"times":10,"command":["L","L","L","4","L","L","L","4","D","R","R","R","6","R","R","R","6"]},{"times":3,"command":["U","U","L","L","8","4"]},{"times":6,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D",{"times":10,"command":["R","R","R","6","R","R","R","6","D","L","L","L","4","L","L","L","4"]},{"times":3,"command":["U","U","R","R","8","6"]},{"times":6,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]
        ];
        let coreCode = commandArr[commandStep];
        let loop = commandStep <= 1 ? 2 : 4;
        let params = {"command": []};
        let linshiyinyong = params;
        for (let i = 0;i<loop;i++){
            linshiyinyong['command'].push({"times": 10, "command": []});
            linshiyinyong = linshiyinyong.command[0];
            if (i >= loop-1) {
                linshiyinyong.command.push(...coreCode);
            }
        }
        linshiyinyong = null;
        let datarus = await fetch('https://juejin-game.bytedance.com/game/sea-gold/game/command?uid=' + uid + '&time=' + Date.parse(new Date()), {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': authorization,
                'accept': 'application/json, text/plain, */*',
                'content-length': JSON.stringify(params).length,
                'x-tt-gameid': gameid,
            },
            body: JSON.stringify(params)
        }).then(async (res) => {
            console.log(3.1,res)
            return res.json();
        });
        return datarus;
    })();
    await sleep(2000);
    console.log(4,'test')
    await (async function letUsGo(){
        // 0:开局往左 1:开局往右 2:中期 3:后期飞翔 4:后期扫荡
        let commandStep = 4;
        // ····················自定义区域·END·····················

        let commandArr = [
            // 开局往左
            [{"times":10,"command":["2","L","D","L","4","D","6","R","D","R"]}],
            // 开局往右
            [{"times":10,"command":["2","R","D","R","6","D","4","L","D","L"]}],
            // 中期
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：万米飞翔
            [{"times":10,"command":[{"times":2,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D"]},{"times":2,"command":["U","U","8","R"]},{"times":10,"command":[{"times":2,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]},{"times":2,"command":["U","U","8","L"]}],
            // 后期：无情扫荡
            [{"times":10,"command":["L","L","L","4","L","L","L","4","D","R","R","R","6","R","R","R","6"]},{"times":3,"command":["U","U","L","L","8","4"]},{"times":6,"command":["D","2","L","D","L","4","D","6","U","L","D","R"]},"L","D",{"times":10,"command":["R","R","R","6","R","R","R","6","D","L","L","L","4","L","L","L","4"]},{"times":3,"command":["U","U","R","R","8","6"]},{"times":6,"command":["D","2","R","D","R","6","D","4","U","R","D","L"]},"R","D"]
        ];
        let coreCode = commandArr[commandStep];
        let loop = commandStep <= 1 ? 2 : 4;
        let params = {"command": []};
        let linshiyinyong = params;
        for (let i = 0;i<loop;i++){
            linshiyinyong['command'].push({"times": 10, "command": []});
            linshiyinyong = linshiyinyong.command[0];
            if (i >= loop-1) {
                linshiyinyong.command.push(...coreCode);
            }
        }
        linshiyinyong = null;
        let datarus = await fetch('https://juejin-game.bytedance.com/game/sea-gold/game/command?uid=' + uid + '&time=' + Date.parse(new Date()), {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': authorization,
                'accept': 'application/json, text/plain, */*',
                'content-length': JSON.stringify(params).length,
                'x-tt-gameid': gameid,
            },
            body: JSON.stringify(params)
        }).then(async (res) => {
            console.log(4.1,res)
            return res.json();
        });
        return datarus;
    })();
    console.log(5,'test')
}
letUsGoALl();