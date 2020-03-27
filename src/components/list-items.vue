<template>
  <div>
    <div class="valid" :class="{'icon-arrow': iconArrow === 'parent'}">
      <div class="valid-head" v-if="title">
        <span class="title">{{title}}</span>
        <i v-if="titleStar" class="icon-star"></i>
      </div>
      <div class="valid-text" :class="{'icon-arrow': iconArrow === 'input'}">
        <input
          :value="value"
          :type="type === 'number' ? type : 'text'"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          @input="bindVal($event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list-items",
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
      
    }
  },
  // directives: {
  //   valLength: {
  //     bind(el,binding) {
  //       console.log(binding.value)
  //       // let eVal = el.target.value
  //       // if(eVal.length > 11) {
  //       //   el.target.value = eVal.substr(0,11)
  //       //   return
  //       // } else {
  //       //   this.$emit("input", eVal)
  //       // }
  //     },
  //   }
  // }
};
</script>