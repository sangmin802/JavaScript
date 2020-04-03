// console과 같은 utility기능은 이런식으로 해주면 편하다.
export const _ = {
  log(data){
    console.log(data);
  }
}

export class MyLogger {
  constructor(props){
    // props = 상속해주는 객체의 값들 (react생각)
    this.lectures = ['JavaScript', 'ECMA Script'];
  }

  getLectures(){
    return this.lectures;
  }
  getTime(){
    return Date.now();
  }
  getCurrentHour(){
    return new Date().getHours();
  }
}