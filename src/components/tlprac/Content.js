import React from 'react';

// https://blogpack.tistory.com/635
// 참고 자료

const Content = () => {
    //고정조건.
    let friends = [
    {name: '라이언', age: 5}, 
    {name: '어피치', age: 3}, 
    {name: '콘', age: 4}, 
    {name: '프로도', age: 2}
];
    // //첫번째 방식
    // let template = `<ul>
    // <li>이름:${friends[0].name} , 나이: ${friends[0].age}</li>
    // <li>이름:${friends[1].name} , 나이: ${friends[1].age}</li>
    // <li>이름:${friends[2].name} , 나이: ${friends[2].age}</li>
    // <li>이름:${friends[3].name} , 나이: ${friends[3].age}</li>
    // </ul>`


    //두번째 방식(중첩과 반복문 구현)
    let template = `<ul>
    ${friends.map(function(friend){return `<li> 이름 : ${friend.name}, 나이: ${friend.age}</li>`}).join('\n')}
    </ul>`


    //세번째 방식(script로 템플릿 리터럴을 분리하기))
    //eval()은 문자열로 된 자바스크립트 코드를 실행할 수 있는 코드로 변경합니다.
    // document.addEventListener('DOMContentLoaded', function(){
    //     let template = eval(document.getElementById('templateliteral').innerHTML);
    //     console.log(template);
    // });



   console.log(template);

    return (
        <>  
        
        </>
    );
};

export default Content;