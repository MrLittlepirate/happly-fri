const REMBER_ANSWER = 'REMBER_ANSWER'   // 记录答案

const mutations = {
    // 记录答案
    [REMBER_ANSWER](state, answerId) {
        state.answerid.push(answerId);
    }
}

export default mutations