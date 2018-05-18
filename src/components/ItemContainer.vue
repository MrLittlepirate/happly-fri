<!-- item容器 -->
<template>
  <section>
    <!-- 头部：第几题 -->
    <header class="topCls">
        <span v-if="fatherComponent == 'home'" class="">{{ level }}</span>
        <span v-if="fatherComponent == 'item'" class="">题目{{ itemNum }}</span>
    </header>

    <!-- 首页 -->
    <div v-if="fatherComponent == 'home'">
        <div class="home_logo item_container_style"></div>
        <button @click="startHandle">开始答题</button>
    </div>

    <!-- item答题页 -->
    <div v-if="fatherComponent == 'item'">
        <div class="item_container_style">
            <div v-if="itemDetail.length >0 ">
                <header> {{ itemDetail[itemNum-1].topic_name }} </header>
                <div v-for="(item, index) in itemDetail[itemNum-1].topic_answer">
                      <input type="radio" name="radio" value="item.topic_answer_id" 
                          @click="choosed(index, item.topic_answer_id)">
                          {{chooseType(index)}}  {{item.answer_name}}
                      </input>
                </div>
            </div>
        </div>
        
        <div>
            <button v-if="itemNum < itemDetail.length" @click="nextItem">下一题</button>
            <button v-else @click="submitAnswer">提交</button>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  name: 'ItemContainer',
  props: ['fatherComponent'],
  data () {
    return { 
        choosedNum: null, // 选中的答案索引 0-3
        choosedId: null   // 选中的答案id
    }
  },
  // 计算属性
  computed: mapState([
     'level',   // 第几周
     'itemNum',  // 第几题
     'itemDetail'    // 题目详情
  ]),
  methods: {// 方法处理
    ...mapActions([
      'saveAnswer'
    ]),

    // 开始答题处理
    startHandle() {
        this.$router.push('Item')
    },
    // 下一题处理
    nextItem() {
        var $this = this
        if($this.choosedNum !== null) {
            // 清空选中项
            $this.choosedNum = null;
            // 保存答案
            $this.saveAnswer($this.choosedId)
            // store中的题目序号递增
            // $this.itemNum++;  

            // TODO 清空radio的选中值☑
        } else {
            alert('请选择答案')
        }
        

    },
    // 提交答案处理
    submitAnswer() {
        if(this.choosedNum !== null) {
            // 保存答案
            this.saveAnswer(this.choosedId)
            // 跳转到分数页面
            this.$router.push('Score')
        } else {
            alert('请选择答案')
        }
    },
    // 索引对应的选项标号
    chooseType: type => {
        // type是索引0-3
        switch(type) {
            case 0: return 'A';
            case 1: return 'B';
            case 2: return 'C';
            case 3: return 'D';
            default: return ''; 
        }
    },
    // 选中答案处理
    choosed(index, topicAnswerId) {
        this.choosedNum = index;
        this.choosedId = topicAnswerId;
        console.log("num: "+this.choosedNum)
        console.log("id: "+this.choosedId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .topCls{

  }
  .home_logo{
		background-image: url(../images/1-2.png);
	}
</style>
