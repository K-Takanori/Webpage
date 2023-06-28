function train_cal(text, supportcard, condition, training, train_level, growths){
    //トレーニング基礎値
    const speed_speed_training = training[0].speed + supportcard.speed_bonus
    const speed_power_training = training[0].power + supportcard.power_bonus
    const stamina_stamina_training = training[1].stamina + supportcard.stamina_bonus
    const stamina_guts_training = training[1].guts + supportcard.guts_bonus
    const power_stamina_training = training[2].stamina + supportcard.stamina_bonus
    const power_power_training = training[2].power + supportcard.power_bonus
    const guts_speed_training = training[3].speed + supportcard.speed_bonus
    const guts_power_training = training[3].power + supportcard.power_bonus
    const guts_guts_training = training[3].guts + supportcard.guts_bonus
    const cleverness_speed_training = training[4].speed + supportcard.speed_bonus
    const cleverness_cleverness_training = training[4].cleverness + supportcard.cleverness_bonus
    const skill_training = 5 + supportcard.skill_bonus

    //成長率
    const speed_growth_rate = 1 + 0.01 * growths[0]
    const stamina_growth_rate = 1 + 0.01 * growths[1]
    const power_growth_rate = 1 + 0.01 * growths[2]
    const guts_growth_rate = 1 + 0.01 * growths[3]
    const cleverness_growth_rate = 1 + 0.01 * growths[4]

    //やる気倍率
    const motivation_rate = 1 + condition.value * (1 + 0.01 * supportcard.motivation)

    //トレーニング効果倍率
    let training_rate = 1 + 0.01 * supportcard.training
    if(supportcard.id == "maruzen"){
        training_rate = 1 + 0.01 * train_level * 5
    }

    //友情ボーナス
    const friendship_rate = 1 + 0.01 * supportcard.friendship

    //人数ボーナス
    const NoP = 1
    const NoP_rate = 1 + 0.05 * NoP

    text += "<h2>"+supportcard.name+"</h2>"
    text += "<div class=\"parent\">";
    text += "<div>"
    text += "<h3>【友情トレーニングの時】</h3>"
    text += "<h3>スピードトレーニング</h3>"
    text += "<p>スピード："+Math.round(speed_speed_training * speed_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<p>パワー："+Math.round(speed_power_training * power_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<h3>スタミナトレーニング</h3>"
    text += "<p>スタミナ："+Math.round(stamina_stamina_training * stamina_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<p>根性："+Math.round(stamina_guts_training * guts_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<h3>パワートレーニング</h3>"
    text += "<p>スタミナ："+Math.round(power_stamina_training * stamina_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<p>パワー："+Math.round(power_power_training * power_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<h3>根性トレーニング</h3>"
    text += "<p>スピード："+Math.round(guts_speed_training * speed_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<p>パワー："+Math.round(guts_power_training * power_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<p>根性："+Math.round(guts_guts_training * guts_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<h3>賢さトレーニング</h3>"
    text += "<p>スピード："+Math.round(cleverness_speed_training * speed_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<p>賢さ："+Math.round(cleverness_cleverness_training * cleverness_growth_rate * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "<h3>スキルpt(一律)</h3>"
    text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * friendship_rate * NoP_rate*10000)/10000+"</p>"
    text += "</div>"
    text += "<div>"
    text += "<h3>【友情トレーニングではない時】</h3>"
    text += "<h3>スピードトレーニング</h3>"
    text += "<p>スピード："+Math.round(speed_speed_training * speed_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<p>パワー："+Math.round(speed_power_training * power_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<h3>スタミナトレーニング</h3>"
    text += "<p>スタミナ："+Math.round(stamina_stamina_training * stamina_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<p>根性："+Math.round(stamina_guts_training * guts_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<h3>パワートレーニング</h3>"
    text += "<p>スタミナ："+Math.round(power_stamina_training * stamina_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<p>パワー："+Math.round(power_power_training * power_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<h3>根性トレーニング</h3>"
    text += "<p>スピード："+Math.round(guts_speed_training * speed_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<p>パワー："+Math.round(guts_power_training * power_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<p>根性："+Math.round(guts_guts_training * guts_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<h3>賢さトレーニング</h3>"
    text += "<p>スピード："+Math.round(cleverness_speed_training * speed_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<p>賢さ："+Math.round(cleverness_cleverness_training * cleverness_growth_rate * motivation_rate * training_rate  * NoP_rate*10000)/10000+"</p>"
    text += "<h3>スキルpt(一律)</h3>"
    text += "<p>スキルpt："+Math.round(skill_training * motivation_rate * training_rate * NoP_rate*10000)/10000+"</p>"
    text += "</div>"
    text += "</div>"
    return text

}
