
function buttonClick(){
    // HTMLから取得するデータ群
    const chk_type = document.getElementsByName("chk_type");
    const chk_growth = document.getElementsByName("chk_growth");
    const chk_condition = document.getElementsByName("chk_condition");
    const chk_training = document.getElementsByName("chk_training");
    const chk_support = document.getElementsByName("chk_support");

    //変数群
    let type = null;
    let condition = null;
    let training = null;
    let speed_training = null;
    let stamina_training = null;
    let power_training = null;
    let guts_training = null;
    let cleverness_training = null;
    let train_level = 0
    let support = [];
    let count = 0;
    let text = ""
    let growths = []

    //変数にチェックが入ったidを設定
    //タイプの設定
    for (let i = 0; i < chk_type.length; i++) {
        if(chk_type[i].checked){
            type = chk_type[i].id;
            break;
        }
    }
    if (type == null){
        alert("タイプが設定されていません");
        return;
    }
    //成長率の設定
    for (let i = 0; i < chk_growth.length; i++) {
        if(chk_growth[i].value == ""){
            alert("成長率が設定されていません");
            return;
        }
        growths.push(parseInt(chk_growth[i].value));
    }
    //調子の設定
    for (let i = 0; i < chk_condition.length; i++) {
        if(chk_condition[i].checked){
            for (let j = 0; j < condition_json.length; j++){
                if(chk_condition[i].id == condition_json[j].id){
                    condition = condition_json[j];
                    break;
                }
            }
            break;
        }
    }
    if (condition == null){
        alert("調子が設定されていません");
        return;
    }
    //トレーニングレベルの設定
    for (let i = 0; i < chk_training.length; i++) {
        if(chk_training[i].checked){
            training = chk_training[i].id;
            break;
        }
    }
    if (training == null){
        alert("トレーニングレベルが設定されていません");
        return;
    }

    for(let i = 0; i < training_json["speed_train"].length; i++){
        if(training == training_json["speed_train"][i].id){
            speed_training = training_json["speed_train"][i];
            stamina_training = training_json["stamina_train"][i];
            power_training = training_json["power_train"][i];
            guts_training = training_json["guts_train"][i];
            cleverness_training = training_json["cleverness_train"][i];
            train_level = 5 - i
            break;
        }
    }
    training = [speed_training,stamina_training,power_training,guts_training,cleverness_training]

    //サポカの設定
    for (let i = 0; i < chk_support.length; i++) {
        if(chk_support[i].checked){
            support.push(chk_support[i].id);
        }
    }

    //サポカの計算
    if(type == "comparison"){
        for (let i = 0; i < support_json.length; i++) {
            if(support[count] == support_json[i].id){
                text = train_cal(text,support_json[i],condition,training, train_level, growths)
                if (count != support.length - 1){
                    count++;
                }
            }
        }
    }
    else if(type == "total"){
        let total_support = []
        for (let i = 0; i < support_json.length; i++) {
            if(support[count] == support_json[i].id){
                total_support.push(support_json[i])
                if (count != support.length - 1){
                    count++;
                }
            }
        }
        console.log(total_support)
        text = train_cal_total(text,total_support,condition,training, train_level, growths)
    }
    else if(type == "normal"){
        let total_support = []
        for (let i = 0; i < support_json.length; i++) {
            if(support[count] == support_json[i].id){
                total_support.push(support_json[i])
                if (count != support.length - 1){
                    count++;
                }
            }
        }
        console.log(total_support)
        text = train_cal_normal(text,total_support,condition,training, train_level, growths)
    }
    
    document.getElementById("support_text").innerHTML = text;
    console.log(growths)
}