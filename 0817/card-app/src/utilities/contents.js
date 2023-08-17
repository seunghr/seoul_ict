import { createStore } from "redux";

const contents = [
    { 
        path:"/adult",
        imagePath: "adult.jpg",
        title: "어른의 제국 역습 9기",
        detail: {
                    decription: "20세기 박물관을 다녀온 떡잎마을의 어른들이 이상해졌다. 추억에 빠져 할 일을 내팽개치고 있는데. 지금 이 무책임한 어른들을 짱구가 구해야 한다.",
                    youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2CNSteaC8cg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                    main: "1. 짱구: 아빠, 나 알겠어요?신형만: 흐느끼며 응.. - 발냄새로 깨어난 신형만이 자신에게 질문하는 짱구를 끌어안으며",
                    main01: "2. 노하라 히로시(신형만): 젠장! 이 마을은 왜 이렇게 그립고 정겨운 냄새가 나는 거야! ― 저녁놀 마을을 탈출하면서도 눈물을 흘리며"
                }
      },
      { 
        path:"/typhoon",
        imagePath: "typhoon.jpg",
        title: "태풍을 부르는 장엄한 전설의 전투 10기",
        detail: {
                decription: "이유는 모르겠지만 먼 옛날로 되돌아간 짱구. 도착하자마자 무사들의 전쟁과 정치가들의 음모에 끼어들고. 좌충우돌 짱구가 역사를 바꾼다!",
                youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OaSLG_0jXXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                main: "1. 짱구야..이제서야 미래에서 온 너를 만났는지 알게 되었어...",
                main01: "2. 우리는 떠나지만... 계속 여기 있을 거예요!"
            }
      },
      { 
        path:"/bulgogi",
        imagePath: "bulgogi.jpg",
        title: "태풍을 부르는 영광의 불고기로드 11기",
        detail: {
                decription: "저녁으로 불고기를 먹으려다가 갑자기 일에 휘말려 불고기를 먹기 위해 열심히 싸우는 스토리",
                youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vI9IOxYLBJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                main: "1. 강한 사람은 약한 사람을 도와주는 거랬잖아요, 그런데 약한 사람이든 강한 사람이든 도와주어야 될 것 같아서요",
                main01: "1. 꿈은 도망가지 않아, 도망가는 것은 언제나 자기 자신이지"
            }
      },
      {
        path:"/robot",
        imagePath: "robot.jpg",
        title: "진검승부! 역습의 로봇아빠 22기",
        detail: {
                decription: "짱구 아빠와 똑같은 로봇아빠가 나와 협동하는 스토리",
                youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kX2f5MZmbkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                main: "1. (로봇 신형만이 인간 신형만에게)내 몫까지 부탁할께... 신형만",
                main01: "2. 이 몸이 어떻게 되더라도! 가족은 내가 지킨다!"
            }
      }
    ]

function reducer(state, action){
    return{contents};
}

export const store = createStore(reducer);