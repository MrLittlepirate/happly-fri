<template>
    <div>
        <div v-if="showHide" @click="shareHandle">
            <img src="../images/vaeApp.jpg" width="400px" height="700px"></img>
        </div>

        <div>
            <h1>分数页</h1>
        </div>
        <div>
            <header>
                <span> {{ score }} 分！</span>
            </header>
            <div> {{scoreTips}} </div>
        </div>
        <div>
            <button @click="shareHandle">分享</button>
        </div>
        <div>
            <router-link to="/">返回home</router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'score',
    components: {

    },
    data() {
        var scoreTipsArr = [
            '你说，是不是把知识都还给小学老师了？',
            '还不错，但还需要继续加油哦！',
            '不要嘚瑟还有进步的空间！',
            '智商离爆表只差一步了！',
            '你也太聪明啦，葡萄之家欢迎你！'
        ];
        return {
            score: 0, // 分数
            scoreTips: '', // 分数提示
            rightAnswer: [2,7,12,13,18],  // 正确答案
            scoreTipsArr: scoreTipsArr,
            showHide: false, //是否显示提示
        }
    },
    computed:mapState(['answerid']),
    methods: {
        // 加载总分数
        loadTotalScore() {
            // 答对一道20分
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20
                }
            })
        },
        // 加载分数提示
        loadScoreTip() {
            var score = this.score
            var scoreTipsArr = this.scoreTipsArr
            if(score <= 20) {
                this.scoreTips = scoreTipsArr[0]
            } else if (score <= 40) {
                this.scoreTips = scoreTipsArr[1]
            } else if (score <= 60) {
                this.scoreTips = scoreTipsArr[2]
            } else if (score <= 80) {
                this.scoreTips = scoreTipsArr[3]
            } else if (score <= 100) {
                this.scoreTips = scoreTipsArr[4]
            }
        },
        // 是否分享
        shareHandle() {
            this.showHide = !this.showHide;
        }
    },
    created() {
        // 加载总分数
        this.loadTotalScore();
        // 加载分数提示
        this.loadScoreTip();
    }
}
</script>

<style lang = "less">
</style>
