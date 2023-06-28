const adam = {
    ability : 1.25,
    HA : 1,
    atk : 1.35,
};

const tadaomi = {
    ability : 1.25,
    HA : 1,
    atk : 1.4,
};

const ryu = {
    ability : 1.08,
    HA : 1.13,
    atk : 1.35,
};

const saber = {
    ability : 1,
    HA : 1,
    atk : 1.45,
};

const fluke = [
    275,    //フルーク 
    269,    //緑フルーク 
    228,    //青フルーク
];
const fluke_magnification = 4.00;

const zisyo_fluke = [
    274    //自傷フルーク 
];
const zisyo_fluke_magnification = 4.60;

const kanone = [
    266,    //カノーネ 
    266, //緑カノーネ
    240,   //赤カノーネ
];
const kanone_magnification = 4.20;

const zisyo_kanone = [
    274    //自傷カノーネ(仮)  
];
const zisyo_kanone_magnification = 4.80;

const shiryu = [
    266,    //しりゅう
    228, /*仮*/ //緑しりゅう
    274    //赤しりゅう
];
const siryu_magnification = 3.20;

const guard = [
    266,    //URイェーガー 
    194,    //イェーガー 
    278    //ディーバ
];

const heal = [
    207,    //ガブ 
    286,    //ギアメ 
    271,    //赤ガブ 
    286,    //桜 
    264,    //赤桜
    222,    //みみみ 
    286    //緑みみみ
];
let card_status = [];
card_status = card_status.concat(fluke,zisyo_fluke,kanone,zisyo_kanone,shiryu,guard,heal);
/*1:フルーク, 2:フルーク(青), 3:自傷フルーク, 4:カノーネ(青), 5:カノーネ, 6:自傷カノーネ, 7:しりゅう(青), 8:しりゅう, 0:その他 */
const card_value = [1,1,2,3,4,5,5,6,7,8,8,0,0,0,0,0,0,0,0,0,0,];


function buttonClick(){
    let status = 0;
    let card_flag = [];
    let select_card_value = [];
    const chk1 = document.getElementsByName("chk1");
    //カードの採用状況の取得
    for (let i = 0; i < chk1.length; i++) {
        card_flag.push(chk1[i].checked);
    }
    //ステータスの計算
    for (let i = 0; i < card_flag.length; i++){
        if(card_flag[i]){
            status += card_status[i];
            select_card_value.push(card_value[i]);
        }
    }
    select_card_value = Array.from(new Set(select_card_value));
    const adam_atk = parseInt(status * adam.atk);
    const tadaomi_atk = parseInt(status * tadaomi.atk);
    const ryu_atk = parseInt(status * ryu.atk);
    const saber_atk = parseInt(status * saber.atk);

    //アダム
    let adam_text = "<h2>アダム</h2>";
    for(let i = 0; i < select_card_value.length; i++){
        switch(select_card_value[i]){
            case 1:
                adam_text += "<p>フルークの威力は"+ parseInt(adam_atk * fluke_magnification) + "です</p>";
                break;
            case 2:
                adam_text += "<p>青フルークの威力は"+ (parseInt(adam_atk * fluke_magnification * adam.ability)) + "です</p>";
                break;
            case 3:
                adam_text += "<p>自傷フルークの威力は"+ (parseInt(adam_atk * zisyo_fluke_magnification)) + "です</p>";
                break;
            case 4:
                adam_text += "<p>青カノーネの威力は"+ (parseInt(adam_atk * kanone_magnification * adam.ability)) + "です</p>";
                break;
            case 5:
                adam_text += "<p>カノーネの威力は"+ (parseInt(adam_atk * kanone_magnification)) + "です</p>";
                break;
            case 6:
                adam_text += "<p>自傷カノーネの威力は"+ (parseInt(adam_atk * zisyo_kanone_magnification)) + "です</p>";
                break;
            case 7:
                adam_text += "<p>青始龍の威力は"+ (parseInt(adam_atk * siryu_magnification * adam.ability)) + "です</p>";
                break;
            case 8:
                adam_text += "<p>始龍の威力は"+ (parseInt(adam_atk * siryu_magnification)) + "です</p>";
                break;
            default:
                ;
        }
    }
    document.getElementById("adam").innerHTML = adam_text;

    //忠臣
    let tadaomi_text = "<h2>忠臣</h2>";
    let tadaomi_count_fluke = true;
    let tadaomi_count_kanone = true;
    let tadaomi_count_siryu = true;
    for(let i = 0; i < select_card_value.length; i++){
        switch(select_card_value[i]){
            case 1 : case 2:
                if(tadaomi_count_fluke){                
                    tadaomi_text += "<p>フルークの威力は"+ parseInt(tadaomi_atk * fluke_magnification * tadaomi.ability) + "です</p>";
                    tadaomi_count_fluke = false;
                }
                break;
            case 3:
                tadaomi_text += "<p>自傷フルークの威力は"+ (parseInt(tadaomi_atk * zisyo_fluke_magnification * tadaomi.ability)) + "です</p>";
                break;
            case 4: case 5:
                if(tadaomi_count_kanone){
                    tadaomi_text += "<p>カノーネの威力は"+ (parseInt(tadaomi_atk * kanone_magnification * tadaomi.ability)) + "です</p>";
                    tadaomi_count_kanone = false;
                }
                break;
            case 6:
                tadaomi_text += "<p>自傷カノーネの威力は"+ (parseInt(tadaomi_atk * zisyo_kanone_magnification * tadaomi.ability)) + "です</p>";
                break;
            case 7: case 8:
                if(tadaomi_count_siryu){
                    tadaomi_text += "<p>始龍の威力は"+ (parseInt(tadaomi_atk * siryu_magnification * tadaomi.ability)) + "です</p>";
                    tadaomi_count_siryu = false;
                }
                break;
            default:
                ;
        }
    }
    document.getElementById("tadaomi").innerHTML = tadaomi_text;

    //リュウ
    let ryu_text = "<h2>リュウ</h2>";
    let ryu_count_fluke = true;
    let ryu_count_kanone = true;
    let ryu_count_siryu = true;
    for(let i = 0; i < select_card_value.length; i++){
        switch(select_card_value[i]){
            case 1 : case 2:
                if(ryu_count_fluke){
                    ryu_text += "<p>通常時のフルークの威力は"+ parseInt(ryu_atk * fluke_magnification * ryu.ability) + "です</p>";
                    ryu_text += "<p>HA時のフルークの威力は"+ parseInt(ryu_atk * fluke_magnification * ryu.ability * ryu.HA) + "です</p>";
                    ryu_count_fluke = false;
                }
                break;
            case 3:
                ryu_text += "<p>通常時の自傷フルークの威力は"+ (parseInt(ryu_atk * zisyo_fluke_magnification * ryu.ability)) + "です</p>";
                ryu_text += "<p>HA時の自傷フルークの威力は"+ (parseInt(ryu_atk * zisyo_fluke_magnification * ryu.ability * ryu.HA)) + "です</p>";
                break;
            case 4: case 5:
                if(ryu_count_kanone){
                    ryu_text += "<p>通常時のカノーネの威力は"+ (parseInt(ryu_atk * kanone_magnification * ryu.ability)) + "です</p>";
                    ryu_text += "<p>HA時のカノーネの威力は"+ (parseInt(ryu_atk * kanone_magnification * ryu.ability * ryu.HA)) + "です</p>";
                    ryu_count_kanone = false;
                }
                break;
            case 6:
                ryu_text += "<p>通常時の自傷カノーネの威力は"+ (parseInt(ryu_atk * zisyo_kanone_magnification * ryu.ability)) + "です</p>";
                ryu_text += "<p>HA時の自傷カノーネの威力は"+ (parseInt(ryu_atk * zisyo_kanone_magnification * ryu.ability * ryu.HA)) + "です</p>";
                break;
            case 7: case 8:
                if(ryu_count_siryu){
                    ryu_text += "<p>通常時の始龍の威力は"+ (parseInt(ryu_atk * siryu_magnification * ryu.ability)) + "です</p>";
                    ryu_text += "<p>HA時の始龍の威力は"+ (parseInt(ryu_atk * siryu_magnification * ryu.ability * ryu.HA)) + "です</p>";
                    ryu_count_siryu = false;
                }
                break;
            default:
                ;
        }
    }
    document.getElementById("ryu").innerHTML = ryu_text;

    //セイバー
    let saber_text = "<h2>セイバー</h2>";
    let saber_count_fluke = true;
    let saber_count_kanone = true;
    let saber_count_siryu = true;
    for(let i = 0; i < select_card_value.length; i++){
        switch(select_card_value[i]){
            case 1 : case 2:
                if(saber_count_fluke){                
                    saber_text += "<p>フルークの威力は"+ parseInt(saber_atk * fluke_magnification) + "です</p>";
                    saber_count_fluke = false;
                }
                break;
            case 3:
                saber_text += "<p>自傷フルークの威力は"+ (parseInt(saber_atk * zisyo_fluke_magnification)) + "です</p>";
                break;
            case 4: case 5:
                if(saber_count_kanone){
                    saber_text += "<p>カノーネの威力は"+ (parseInt(saber_atk * kanone_magnification)) + "です</p>";
                    saber_count_kanone = false;
                }
                break;
            case 6:
                saber_text += "<p>自傷カノーネの威力は"+ (parseInt(saber_atk * zisyo_kanone_magnification)) + "です</p>";
                break;
            case 7: case 8:
                if(saber_count_siryu){
                    saber_text += "<p>始龍の威力は"+ (parseInt(saber_atk * siryu_magnification)) + "です</p>";
                    saber_count_siryu = false;
                }
                break;
            default:
                ;
        }
    }
    document.getElementById("saber").innerHTML = saber_text;
    console.log(status);
    console.log(select_card_value)
}
