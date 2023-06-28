function train_cal_normal(text, supportcard, condition, training, train_level, growths){
    let speed_bonus = 0;
    let stamina_bonus = 0;
    let power_bonus = 0;
    let guts_bonus = 0;
    let cleverness_bonus = 0;
    let skill_bonus = 0;
    let total_motivation = 0;
    let total_training = 0;
    let total_friendship = {"speed": 1, "stamina": 1, "power": 1, "guts": 1, "cleverness": 1};
    let train_Flag = {"speed": false, "stamina": false, "power": false, "guts": false, "cleverness": false};
    let total_good = {"speed": 1, "stamina": 1, "power": 1, "guts": 1, "cleverness": 1};

    for(let i = 0; i < supportcard.length; i++){
        speed_bonus += supportcard[i].speed_bonus;
        stamina_bonus += supportcard[i].stamina_bonus;
        power_bonus += supportcard[i].power_bonus;
        guts_bonus += supportcard[i].guts_bonus;
        cleverness_bonus += supportcard[i].cleverness_bonus;
        skill_bonus += supportcard[i].skill_bonus;
        total_motivation += 0.01 * supportcard[i].motivation;
        total_training += 0.01 * supportcard[i].training;
        if(supportcard[i].id == "maruzen"){
            total_training += 0.01 * train_level * 5
        }
        total_friendship[supportcard[i].type] *= 1 + 0.01 * supportcard[i].friendship;
        train_Flag[supportcard[i].type] = true
        good = (100 + supportcard[i].good) * (1 + (supportcard[i].pri_good / 100)) / (450 + (100 + supportcard[i].good) * (1 + supportcard[i].pri_good / 100))
        not_good = (0.9 - good) / 4.0
        for(const property in total_good){
            if(property == supportcard[i].type){
                total_good[property] *= good;
            }
            else{
                total_good[property] *= not_good;
            }
        }
        console.log(total_good)
    }

    //トレーニング基礎値
    const speed_speed_training = training[0].speed + speed_bonus
    const speed_power_training = training[0].power + power_bonus
    const stamina_stamina_training = training[1].stamina + stamina_bonus
    const stamina_guts_training = training[1].guts + guts_bonus
    const power_stamina_training = training[2].stamina + stamina_bonus
    const power_power_training = training[2].power + power_bonus
    const guts_speed_training = training[3].speed + speed_bonus
    const guts_power_training = training[3].power + power_bonus
    const guts_guts_training = training[3].guts + guts_bonus
    const cleverness_speed_training = training[4].speed + speed_bonus
    const cleverness_cleverness_training = training[4].cleverness + cleverness_bonus
    const skill_training = 5 + skill_bonus

    //成長率
    const speed_growth_rate = 1 + 0.01 * growths[0]
    const stamina_growth_rate = 1 + 0.01 * growths[1]
    const power_growth_rate = 1 + 0.01 * growths[2]
    const guts_growth_rate = 1 + 0.01 * growths[3]
    const cleverness_growth_rate = 1 + 0.01 * growths[4]

    //やる気倍率
    const motivation_rate = 1 + condition.value * (1 + total_motivation);

    //トレーニング効果倍率
    const training_rate = 1 + total_training;

    //友情ボーナス
    const friendship_rate = total_friendship;

    //人数ボーナス
    const NoP = supportcard.length;
    const NoP_rate = 1 + 0.05 * NoP

    console.log(motivation_rate, training_rate, friendship_rate)

    text += "<h2>通常の友情トレーニング</h2>"
    text += "<div class=\"parent\">";
    text += "<div>"
    if(train_Flag["speed"]){
        text += "<h3>スピードトレーニング</h3>"
        text += "<p>スピード："+Math.round(speed_speed_training * speed_growth_rate * motivation_rate * training_rate * friendship_rate["speed"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>パワー："+Math.round(speed_power_training * power_growth_rate * motivation_rate * training_rate * friendship_rate["speed"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * friendship_rate["speed"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>発生率："+Math.round(total_good["speed"]*10000)/100+"％</p>"
    }
    if(train_Flag["stamina"]){
        text += "<h3>スタミナトレーニング</h3>"
        text += "<p>スタミナ："+Math.round(stamina_stamina_training * stamina_growth_rate * motivation_rate * training_rate * friendship_rate["stamina"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>根性："+Math.round(stamina_guts_training * guts_growth_rate * motivation_rate * training_rate * friendship_rate["stamina"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * friendship_rate["stamina"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>発生率："+Math.round(total_good["stamina"]*10000)/100+"％</p>"
    }
    if(train_Flag["power"]){
        text += "<h3>パワートレーニング</h3>"
        text += "<p>スタミナ："+Math.round(power_stamina_training * stamina_growth_rate * motivation_rate * training_rate * friendship_rate["power"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>パワー："+Math.round(power_power_training * power_growth_rate * motivation_rate * training_rate * friendship_rate["power"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * friendship_rate["power"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>発生率："+Math.round(total_good["power"]*10000)/100+"％</p>"
    }
    if(train_Flag["guts"]){
        text += "<h3>根性トレーニング</h3>"
        text += "<p>スピード："+Math.round(guts_speed_training * speed_growth_rate * motivation_rate * training_rate * friendship_rate["guts"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>パワー："+Math.round(guts_power_training * power_growth_rate * motivation_rate * training_rate * friendship_rate["guts"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>根性："+Math.round(guts_guts_training * guts_growth_rate * motivation_rate * training_rate * friendship_rate["guts"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * friendship_rate["guts"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>発生率："+Math.round(total_good["guts"]*10000)/100+"％</p>"
    }
    if(train_Flag["cleverness"]){
        text += "<h3>賢さトレーニング</h3>"
        text += "<p>スピード："+Math.round(cleverness_speed_training * speed_growth_rate * motivation_rate * training_rate * friendship_rate["cleverness"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>賢さ："+Math.round(cleverness_cleverness_training * cleverness_growth_rate * motivation_rate * training_rate * friendship_rate["cleverness"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * friendship_rate["cleverness"] * NoP_rate*10000)/10000+"</p>"
        text += "<p>発生率："+Math.round(total_good["cleverness"]*10000)/100+"％</p>"
    }
    text += "</div>"
    text += "</div>"
    return text

}
