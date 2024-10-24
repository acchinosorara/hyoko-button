// 縦幅のリサイズを監視し、値をCSS変数に代入
const heightObserver = new ResizeObserver(entries => {
    const headLength = entries.length
    for (let i = 0; i < headLength; i++) {
        const headHeight = entries[i].contentBoxSize[0].blockSize
        document.documentElement.style.setProperty(`--headHeight${i}`, `${headHeight}px`)

        // 縦幅の4分の3の値
        document.documentElement.style.setProperty(`--threeQuarters${i}`, `${headHeight * 0.75}px`)
    }
})

// 各ボタンに対してresizeObserverを実行
const headAll = document.querySelectorAll('.btn_head')
headAll.forEach(elm => {
    heightObserver.observe(elm)
})

const btn = document.querySelectorAll('.btn')
btn.forEach((elm, i) => {
    
    // 各ボタンの縦幅に応じたスタイル
    const [ head, hand0, hand1, text ] = elm.children
    hand0.style.top = `var(--threeQuarters${i})`
    hand1.style.top = `var(--threeQuarters${i})`
    text.style.height = `var(--headHeight${i})`
    text.style.marginTop = `var(--threeQuarters${i})`

    // ボタンのホバー時にアニメーションを実行
    elm.addEventListener('mouseenter', () => {
        head.animate(headAnimation(i), animationOption)
        hand0.animate(handAnimation('-150%', '-200%'), animationOption)
        hand1.animate(handAnimation('50%', '100%'), animationOption)
    })
})

// アニメーション（頭）
const headAnimation = (i) => {
    const keyframes = [
        {
            offset: 0,
            top: 0
        },
        {
            offset: 0.1,
            top: `calc(var(--headHeight${i}) / 4 * -1)`
        },
        {
            offset: 0.2,
            top: `var(--threeQuarters${i})`
        },
        {
            offset: 0.8,
            top: `var(--threeQuarters${i})`
        },
        {
            offset: 0.9,
            top: `calc(var(--headHeight${i}) / 4 * -1)`
        },
        {
            offset: 1,
            top: 0
        }
    ]   
    return keyframes
}

// アニメーション（手）
const handAnimation = (ini, mv) => {
    const keyframes = [
        {
            offset: 0,
            translate: `${ini} -50%`,
            zIndex: 40
        },
        {
            offset: 0.1,
            translate: `${mv} -125%`,
            zIndex: 20
        },
        {
            offset: 0.2,
            translate: `${mv} 0`
        },
        {
            offset: 0.8,
            translate: `${mv} 0`
        },
        {
            offset: 0.9,
            translate: `${mv} -125%`,
            zIndex: 20
        },
        {
            offset: 1,
            translate: `${ini} -50%`,
            zIndex: 40
        }
    ]
    return keyframes
}

// アニメーション設定
const animationOption = {
    duration: 800,
    easing: 'ease-in-out'
}