<template>
  <div class="date">
    <div>
      <button @click="changeMonth">Change Month</button>
    </div>
    <div style="font-size:20px;font-weight:600;">{{r}}</div>
    <div class="date-list">
      <ul class="wrap">
      <li class="title">日</li>
      <li class="title">一</li>
      <li class="title">二</li>
      <li class="title">三</li>
      <li class="title">四</li>
      <li class="title">五</li>
      <li class="title">六</li>
      <li 
        :class="{'blue': item === number}"
        v-for="(item,key) in month" 
        :key="key"
        @click="number = item"
      >
        {{item}}
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "date-items",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: String,
    title: {
      type: String,
      default: 'text'
    },
    type: String, // text | number
    disabled: Boolean, // true | false
    readonly: Boolean, // true | false
    titleStar: Boolean, // true | false
    placeholder: String,
    iconArrow: String, // input | parent
    // 最大文字长度
    maxlength: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      dates: [],
      month: [],
      number: '',
      r: ''
    }
  },
  created() {
    // 今年
    let toYear = new Date().getFullYear()
    // 当月份
    let _month = null
    // 新月份
    let _newMonth = null
    // 日期
    let _date = null
    // 所有年份日期
    let dates = {}
    // 十二个月
    for (let y = 0; y <= 3; y++) {
      // 年份
      dates[toYear+y] = {}
      for (let i = 1; i <= 12; i++) {
        _month = i
        // 月份
        dates[toYear+y][i] = []
        // 31日
        for (let j = 1; j <= 31; j++) {
          _newMonth = new Date(`${toYear+y}-${i}-${j}`).getMonth()+1
          _date = new Date(`${toYear+y}-${i}-${j}`).getDate()
          if(_newMonth === _month) {
            dates[toYear+y][i].push(_date)
          }
        }
      }
    }
    this.dates = dates
    this.month = dates['2020']['1']
    console.log('==> ', this.month)
  },
  methods: {
    bindVal(e) {

      // 如果emit方法定义的事件名与原生事件名相同，则触发的是原生的事件
      // 例：input change
      console.log(this.value)
      let eVal = e.target.value
      if(this.maxlength && eVal.length > this.maxlength) {
        e.target.value = eVal.substr(0,11)
        return
      } else {
        this.$emit("input", eVal)
      }
      
    },
    changeMonth() {
      let r = Math.floor(Math.random()*12+1)
      this.r = r
      this.month = this.dates['2020'][r]
      console.log(r, this.month)
    }
  }
}
</script>
<style scoped>
  .date-list{
    width: 274px;
    /* height: 174px; */
    border: 1px solid #333;
    border-radius: 3px;
    margin: 0 auto;
    padding: 10px;
  }
  .date-list .wrap{
    display: flex;
    flex-wrap: wrap;
  }
  .date-list li{
    /* padding: 10px; */
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .date-list li.title{
    font-size: 18px;
    font-weight: 600;
  }
  .date-list li.blue{
    color: #fff;
    background: rgb(46, 96, 235);
    border-radius: 2px;
  }
  
</style>