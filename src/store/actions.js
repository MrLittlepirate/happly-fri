const actions = {
    // 保存答案
    saveAnswer({commit, state}, answerId) {
        console.log('当前题目序号： ' + state.itemNum);
        console.log('保存答案: ' + answerId);
        // 记住答案id
        commit('REMBER_ANSWER', answerId);
        if (state.itemNum < state.itemDetail.length) {
            // 不是最后一题--> 题目序号递增，跳转到下一题
            state.itemNum ++;
        }
    }
}

export default actions