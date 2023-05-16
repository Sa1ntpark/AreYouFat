const FirstQna =[
  {
    q: '1. 성별', //sex
    at: 'Selecting',
    a: [
      { answer: '남', type: 0 },
      { answer: '여', type: 1 }
    ]
  },
]

const MaleQnaList = [
  {
    q: '2. 만 나이', //age
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '3. 1년간 음주 빈도', //BD1_11
    at: 'Selecting',
    a: [
      { answer: '최근 1년간 전혀 마시지 않았다.', type: 0 },
      { answer: '월 1회 미만', type: 1 },
      { answer: '월 1회', type: 2 },
      { answer: '월 2~4회', type: 3 },
      { answer: '주 2~3회', type: 4 },
      { answer: '주 4회 이상', type: 5 },
      { answer: '비해당', type: 6 },
      { answer: '모름', type: 7 }
    ]
  },
  {
    q: '4. 한번에 마시는 음주량',//BD2_1
    at: 'Selecting',
    a: [
      { answer: '1~2잔', type: 0 },
      { answer: '3~4잔', type: 1 },
      { answer: '5~6잔', type: 2 },
      { answer: '7~9잔', type: 3 },
      { answer: '10잔 이상', type: 4 },
      { answer: '비해당', type: 5 },
      { answer: '모름', type: 6 }
    ]
  },
  {
    q: '5. 평소 스트레스 인지 정도',//BP1
    at: 'Selecting',
    a: [
      { answer: '대단히 많이 느낀다.', type: 0 },
      { answer: '많이 느낀다.', type: 1 },
      { answer: '조금 느끼는 편이다.', type: 2 },
      { answer: '거의 느끼지 않는다.', type: 3 },
      { answer: '모름', type: 4 },
    ]
  },

  {
    q: '6. 하루 마신 물컵 수',//N_WAT_C
    at: 'Typing',
  },
  {
    q: '7. 1일 에너지 섭취량(Kcal)',//N_EN
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '8. 1일 단백질 섭취량(g)',//N_PROT
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '9. 1일 지방 섭취량(g)',//N_FAT
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '10. 1일 탄수화물 섭취량(g)',//N_CHO
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '11. 신장(cm)', //HE_ht
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '12. 체중(kg)',//HE_wt
    at: 'Typing',
    a: [
    ]
  },
  {
    q: '13. 바지 사이즈(cm)',//HE_wc
    at: 'Typing',
    a: [
    ]
  }
]

const FemaleQnaList =[
  {
    q: '2. 만 나이',
    at: 'Typing',
  }
]

const infoList = [
  {
    name: '정상',
    desc: "당신은 '정상'입니다"
  },
  {
    name: '과체중',
    desc: "당신은 '과체중'입니다"
  },
  {
    name: '비만',
    desc: "당신은 '비만'입니다"  
  },
]
