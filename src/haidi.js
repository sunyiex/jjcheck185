// https://juejin.cn/game/haidijuejin/?utm_campaign=hdjjgame&utm_medium=user_center
// ····················自定义区域·START···················
// 你的uid
let uid = '26044007450920';
// request header 中的 authorization
let authorization = 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsInNvdXJjZSI6Imp1ZWppbiJ9.eyJleHBpcmVBdCI6MTY1MDQxNjMwNywidXNlcklkIjoiMjYwNDQwMDc0NTA5MjAiLCJpYXQiOjE2NDc4MjQzMDcsImV4cCI6MTY1MDQxNjMwN30.un-Jmkmf_hEbS5ECusLNG3ZjwlX83Por2YDKI8HjfyPzqT_r5Bpn_tFeBEoX-JZKxdjwG6bOZvp-wQHaklM-FlLnxHD43GjbTKWuRwQRbcWKuwV5x4lGhkbI64CswRlnzXJWcYPoGnK1qnUO0E2zU1qmsR3Dsi7AzsumtJ3DyVcLXhFlg5m8V2gaNWx3arFd0Mqx7TKeHsqe00gQGgXBiE_8b8MUX8YRLzU6s4JdUFpaF2cMFsbSKzPbsKIqRmjRJI7Hq1mfdLZmVDd8ev5-xT-MLO-9mj4lDO7X9xPMjK9xRoan6ULqllnz0a50_bKJgH7i2QH-nXu5QNuHnEDDSA\n';
// request header 中的 x-tt-gameid
let gameid = 'x-tt-gameid: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYW1lSWQiOiIyMDIyLTAzLTIxIDA4OjU4OjQzICswODowMCIsInRpbWUiOiIxNjQ3ODI0MzI2Mzk2IiwiaWF0IjoxNjQ3ODI0MzI2LCJleHAiOjE2NTA0MTYzMjZ9.yvyqyQSsU8QyG1AVo1hDCMnPBkvlD8uQOIWCOI3Tier59sqoP3ViwS3aIgdHJTio1yz9BjwAKiKGlePIwV6L-w\n'

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