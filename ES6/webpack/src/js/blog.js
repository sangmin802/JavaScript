
export default class Blog {
  constructor(){
    console.log('Blog is started');
    this.setInitData();
  };

  setInitData(){
    this.getCharacters();
  }

  async getCharacters(){
    const charArr = ['하나둘♪', '교촌치킨♥','콩콩이펀치', '이즈쿠!'];let charData = [];
    await Promise.all(charArr.map(char => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.neople.co.kr/df/servers/prey/characters?characterName=${char}&apikey=dZSOLkwwB8F1e2ikf9jGNf5mbvdJS6tt`).then(res => res.json()).then(data => data)
    })).then(arr => {
      charData = arr.map(det => {
        return det.rows[0];
      });
    });

    this.insertCharacters(charData)
  };

  insertCharacters(data){
    console.log(data)
    const ul = document.querySelector('.charList');
    data.forEach(res => {
      const {characterId, characterName, level, jobName, jobGrowName} = res;
      ul.innerHTML += `
        <div class="char">
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
      `;
    });
  };
};