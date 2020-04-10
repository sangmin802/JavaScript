
export default class Blog {
  constructor(){
    this.likeSet = new Set();
    this.charData = null;
    this.reqData();
  };

  reqData(){
    const getBtn = document.querySelector('.start');
    getBtn.addEventListener('click', () => {
      this.getCharacters();
    })
  }

  getCharacters(){
    const charArr = ['하나둘♪', '교촌치킨♥','콩콩이펀치', '이즈쿠!'];
    const charList = document.querySelector('.charList');
    charList.innerHTML=`<div class="loading">Loading...</div>`;
    Promise.all(charArr.map(char => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.neople.co.kr/df/servers/prey/characters?characterName=${char}&apikey=dZSOLkwwB8F1e2ikf9jGNf5mbvdJS6tt`).then(res => res.json()).then(data => data)
    })).then(arr => {
      return arr.map(det => {
        return det.rows[0];
      });
    }).then(charData => {
      this.charData = charData;
      this.insertCharacters(charData)
    })
  };

  async insertCharacters(data){
    const charList = document.querySelector('.charList');
    charList.innerHTML = '';
    await data.forEach(res => {
      const {characterId, characterName, level, jobName, jobGrowName} = res;
      charList.innerHTML += `
        <div class="char" data-name="${characterName}">
          <div class="img">
            <img src=" https://img-api.neople.co.kr/df/servers/prey/characters/${characterId}?zoom=zoom">
          </div>
          <div class="desc">
            <div class="name">이름 : ${characterName}</div>
            <div class="level">레벨 : ${level}</div>
            <div class="jobKind">직업 : ${jobName}</div>
            <div class="jobName">전직 : ${jobGrowName}</div>
          </div>
          <div class="btn like">좋아요</div>
        </div>        
      `;
    });

    this.templateCreated();
  };

  templateCreated(){
    document.querySelectorAll('.char').forEach((res, index) => {
      res.addEventListener('click', (e) => {
        const btnTarget = e.target;
        const name = res.dataset.name;
        if(btnTarget.className.includes('like')){
          if(!btnTarget.className.includes('unlike')){
            btnTarget.classList.add('unlike');
            btnTarget.innerHTML = '싫어요';
  
            this.likeSet.add(this.charData.find(res => res.characterName === name));
          }else{
            btnTarget.classList.remove('unlike');
            btnTarget.innerHTML = '좋아요';
  
            this.likeSet.delete(this.charData.find(res => res.characterName === name));
          }
          this.createLike();
        }else{
          location.pathname = './menu';
        }
      })
    })
  };

  createLike(){
    const likeDiv = document.querySelector('.likeList');
    likeDiv.innerHTML = '';
    this.likeSet.forEach(res => {
      const {characterId, characterName, level, jobName, jobGrowName} = res;
      likeDiv.innerHTML += `
        <div class="char" data-name="${characterName}">
          <div class="img">
            <img src=" https://img-api.neople.co.kr/df/servers/prey/characters/${characterId}?zoom=zoom">
          </div>
          <div class="desc">
            <div class="name">이름 : ${characterName}</div>
            <div class="level">레벨 : ${level}</div>
            <div class="jobKind">직업 : ${jobName}</div>
            <div class="jobName">전직 : ${jobGrowName}</div>
          </div>
        </div>    
      `
    })
  }
};