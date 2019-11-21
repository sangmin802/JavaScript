
    <h2>2019-11-21</h2>
    <div>flyer전단구현할 때에, for문이 두개가 겹치면서, 10개중 5번째가 true여도, 이후 6,7,8.. 이 flase일 경우 false의 값도 받아졌었다.</div>
    <div>해결 : for문으로 ture에 해당되는 조건을 찾을 시 return을 해주고, false일 경우 for문안에 쓰는것이 아닌, for문 종료 후 return false를 해주면 된다.</div>
