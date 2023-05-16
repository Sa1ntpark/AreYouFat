const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 13;
const select =[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var qIdx = 0; // 0~12
var children = undefined;

function predictDecision(age, BD1_11, BP1, N_WAT_C, N_EN, N_WATER, N_PROT, N_FAT, N_CHO, HE_ht, HE_wt, HE_wc) {
    if (HE_wc <= 86.45) {
      if (HE_wc <= 80.95) {
        if (N_PROT <= 14.34) {
          if (N_WAT_C <= 5.25) {
            return 1;
          } else {
            return 2;
          }
        } else {
          if (HE_wt <= 59.35) {
            if (N_CHO <= -110.68) {
              return 1;
            } else {
              if (BD1_11 <= 1.50) {
                if (N_CHO <= -16.53) {
                  return 1;
                } else {
                  if (age <= 65.00) {
                    return 0;
                  } else {
                    if (HE_wt <= 53.55) {
                      return 0;
                    } else {
                      if (N_WATER <= 601.63) {
                        return 0;
                      } else {
                        return 1;
                      }
                    }
                  }
                }
              } else {
                return 1;
              }
            }
          } else {
            return 2;
          }
        }
      } else {
        return 0;
      }
    } else {
      return 1;
    }
  }

function model(select){
    
    let result = predictDecision(select[1],select[2],select[3],select[4],select[5],select[6],
        select[7],select[8],select[9],select[10],select[11],select[12]);
    return result;
}


function calResult(){ // 모델에 select넣으면 결과 타입
    var result = model(select);
    return result
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;


    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

}

function goResult(){
    qna.style.display ="none";
    result.style.display ="block"; 
    setResult();
}

/// QnA

function addSelectAnswer(answerText, qIdx, idx){
    console.log('addSelectAnswer 도착');
    var a = document.querySelector('.answerBox');
    
    if(answerText.at === "Selecting") { // 객관식 
        var answer = document.createElement('button'); 
        answer.classList.add('answerList');
        answer.classList.add('my-3');
        answer.classList.add('py-3');
        answer.classList.add('mx-auto');
        a.appendChild(answer);
        var children = document.querySelectorAll('.answerList'); 
        answer.innerHTML = answerText.a[idx].answer;
    
        answer.addEventListener("click",function(){ // html onclick과 같은 역할, 선택하면 기존 질문 사라지고 다음 질문 넘어가도록
            if(qIdx > 0){
                select[qIdx] = answerText.a[idx].type;
            }
            else{
                select[qIdx] = answerText.a[idx].type;
            }
            
        }, false);
        return children;
    }
}

function addTypeAnswer(qIdx){
    console.log('addTypeAnswer 도착');
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('input');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    a.appendChild(answer);

    var children = document.querySelectorAll('.answerList');

    answer.addEventListener("input",function(e){ 
            select[qIdx] = e.target.value;
            console.log(e.target.value);
    }, false);

    return children;
}




function goNext(){
    if(qIdx > 0 && (select[qIdx -1] === -1 || select[qIdx -1] ==='')){
      alert("답안을 입력 혹은 선택하세요.")
      return;
    }

    console.log("qIdx = "+ qIdx);
    console.log(qIdx + "번째 인덱스 질문 출력");
    console.log(select);
    if(qIdx === 1){ // 첫 질문 없애기
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        console.log('0번째 인덱스 질문 없애기');
    }

    else if(select[0] === 0) { // 이전 남자 질문 없애기  
      for(let i = 0; i < children.length; i++){
          children[i].disabled = true;
          children[i].style.display = 'none';
          
      }
      console.log(qIdx-1 + '번째 인덱스 질문 없애기');
    }

    else if(select[0] === 1) { // 이전 여자 질문 없애기
      for(let i = 0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.display = 'none';
        
    }
    console.log(qIdx-1 + '번째 인덱스 질문 없애기');
    
    }

    var q = document.querySelector('.qBox');

    if(qIdx === endPoint){ // 마지막 질문 다음
        goResult();
        return;
    }
    else if(qIdx === 0){ // 첫 질문이라면
        q.innerHTML = FirstQna[qIdx].q;

        for(let i in FirstQna[qIdx].a){
            children = addSelectAnswer(FirstQna[qIdx], qIdx,i);
        }
        
        
    }
    else if(select[0] === 0){ //남자라면
        q.innerHTML = MaleQnaList[qIdx-1].q;
        if(MaleQnaList[qIdx-1].at === "Selecting"){
            for(let i in MaleQnaList[qIdx-1].a){
                children = addSelectAnswer(MaleQnaList[qIdx-1], qIdx,i);
            }
        }
        else{
            children = addTypeAnswer(qIdx);  
        }
        
    }

    else if(select[0] === 1){ //여자라면
        q.innerHTML = FemaleQnaList[qIdx-1].q;
        if(FemaleQnaList[qIdx-1].at === "Selecting"){
            for(let i in FemaleQnaList[qIdx-1].a){
                children = addSelectAnswer(FemaleQnaList[qIdx-1], qIdx,i);
            }
        }
        else{
            children = addTypeAnswer(qIdx);    
        }
        
    }

    
    
    qIdx++;
    

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx) + '%';
    console.log("-----------");
}


function begin(){
    main.style.display ="none";
    qna.style.display ="block"; 
    goNext();
}

