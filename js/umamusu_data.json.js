const condition_json = [
    {"id": "zekotyo", "name": "絶好調", "value": 0.2},
    {"id": "kotyo", "name": "好調", "value": 0.1},
    {"id": "futu", "name": "普通", "value": 0.0},
    {"id": "futyo", "name": "不調", "value": -0.1},
    {"id": "zefutyo", "name": "絶不調", "value": -0.2}
]

const training_json = {
    "speed_train":[
        {"id":"train5", "speed":14, "power":5},
        {"id":"train4", "speed":13, "power":4},
        {"id":"train3", "speed":12, "power":3},
        {"id":"train2", "speed":11, "power":3},
        {"id":"train1", "speed":10, "power":3}        
    ],
    "stamina_train":[
        {"id":"train5", "stamina":12, "guts":8},
        {"id":"train4", "stamina":11, "guts":7},
        {"id":"train3", "stamina":10, "guts":6},
        {"id":"train2", "stamina":9, "guts":6},
        {"id":"train1", "stamina":8, "guts":6}
    ],
    "power_train":[
        {"id":"train5", "stamina":6, "power":13},
        {"id":"train4", "stamina":5, "power":12},
        {"id":"train3", "stamina":4, "power":11},
        {"id":"train2", "stamina":4, "power":10},
        {"id":"train1", "stamina":4, "power":9}
    ],
    "guts_train":[
        {"id":"train5", "speed":3, "power":4, "guts":13},
        {"id":"train4", "speed":3, "power":3, "guts":12},
        {"id":"train3", "speed":2, "power":3, "guts":11},
        {"id":"train2", "speed":2, "power":3, "guts":10},
        {"id":"train1", "speed":2, "power":3, "guts":9}
    ],
    "cleverness_train":[
        {"id":"train5", "speed":4, "cleverness":12},
        {"id":"train4", "speed":3, "cleverness":11},
        {"id":"train3", "speed":2, "cleverness":10},
        {"id":"train2", "speed":2, "cleverness":9},
        {"id":"train1", "speed":2, "cleverness":8}
    ]
}

const support_json = [
    {"id": "kitasan","type": "speed", "name": "キタサンブラック", "friendship": 25, "motivation": 30, "training": 15, "speed_bonus": 0, "stamina_bonus": 0, "power_bonus": 1, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 0, "good":80, "pri_good":20},
    {"id": "maruzen","type": "speed", "name": "マルゼンスキー", "friendship": 25, "motivation": 30, "training": 0, "speed_bonus": 1, "stamina_bonus": 0, "power_bonus": 1, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 0, "good":35, "pri_good":0},
    {"id": "takion","type": "speed", "name": "アグネスタキオン", "friendship": 44, "motivation": 0, "training": 5, "speed_bonus": 1, "stamina_bonus": 0, "power_bonus": 0, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 2, "good":80, "pri_good":0},
    {"id": "zyanpoke","type": "speed", "name": "ジャングルポケット", "friendship": 30, "motivation": 0, "training": 10, "speed_bonus": 3, "stamina_bonus": 0, "power_bonus": 1, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 1, "good":65, "pri_good":0},
    {"id": "kuriku","type": "stamina", "name": "スーパークリーク", "friendship": 37, "motivation": 0, "training": 15, "speed_bonus": 0, "stamina_bonus": 1, "power_bonus": 0, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 0, "good":35, "pri_good":20},
    {"id": "ruby","type": "power", "name": "ダイイチルビー", "friendship": 30, "motivation": 0, "training": 5, "speed_bonus": 0, "stamina_bonus": 0, "power_bonus": 2, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 1, "good":80, "pri_good":0},
    {"id": "tigezo","type": "guts", "name": "ウイニングチケット", "friendship": 32, "motivation": 40, "training": 0, "speed_bonus": 0, "stamina_bonus": 0, "power_bonus": 0, "guts_bonus": 1, "cleverness_bonus": 0, "skill_bonus": 0, "good":50, "pri_good":0},
    {"id": "fine","type": "cleverness", "name": "ファインモーション", "friendship": 37, "motivation": 30, "training": 15, "speed_bonus": 0, "stamina_bonus": 0, "power_bonus": 0, "guts_bonus": 0, "cleverness_bonus": 1, "skill_bonus": 0, "good":35, "pri_good":0},
    {"id": "sibi","type": "cleverness", "name": "ミスターシービー", "friendship": 30, "motivation": 30, "training": 5, "speed_bonus": 1, "stamina_bonus": 0, "power_bonus": 0, "guts_bonus": 0, "cleverness_bonus": 2, "skill_bonus": 1, "good":50, "pri_good":0},
    {"id": "ramonu","type": "cleverness", "name": "メジロラモーヌ", "friendship": 35, "motivation": 0, "training": 20, "speed_bonus": 0, "stamina_bonus": 0, "power_bonus": 0, "guts_bonus": 0, "cleverness_bonus": 2, "skill_bonus": 1, "good":50, "pri_good":0},
    {"id": "sirius","type": "cleverness", "name": "シリウスシンボリ", "friendship": 38, "motivation": 60, "training": 0, "speed_bonus": 1, "stamina_bonus": 0, "power_bonus": 0, "guts_bonus": 0, "cleverness_bonus": 1, "skill_bonus": 0, "good":50, "pri_good":0},
    {"id": "megami","type": "group", "name": "三女神", "friendship": 32, "motivation": 15, "training": 10, "speed_bonus": 1, "stamina_bonus": 1, "power_bonus": 1, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 1, "good":0, "pri_good":0},
    {"id": "megami1","type": "group", "name": "三女神(1凸)", "friendship": 27, "motivation": 15, "training": 0, "speed_bonus": 1, "stamina_bonus": 1, "power_bonus": 1, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 1, "good":0, "pri_good":0},
    {"id": "megami0","type": "group", "name": "三女神(無凸)", "friendship": 26, "motivation": 15, "training": 0, "speed_bonus": 1, "stamina_bonus": 0, "power_bonus": 1, "guts_bonus": 0, "cleverness_bonus": 0, "skill_bonus": 1, "good":0, "pri_good":0},
]

