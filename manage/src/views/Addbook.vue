<template>
  <div class="addbook">
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="name"
          name="书籍名称"
          label="书籍名称"
          placeholder="书籍名称"
          :rules="[{ required: true, message: '请填写书籍名称' }]"
        />
        <van-field
          v-model="img"
          name="主图"
          label="主图"
          placeholder="主图"
          :rules="[{ required: true, message: '请填写主图链接' }]"
        />
        <van-field
          v-model="price"
          type="number"
          name="价格"
          label="价格"
          placeholder="商品价格"
          :rules="[{ required: true, message: '请输入商品价格' }]"
        />
        <van-field
          v-model="company"
          name="出版社"
          label="出版社"
          placeholder="出版社"
          :rules="[{ required: true, message: '请填写出版社' }]"
        />
        <van-field
          v-model="city"
          name="发货地"
          label="发货地"
          placeholder="发货地"
          :rules="[{ required: true, message: '请填写发货地' }]"
        />
        <van-field
          v-model="idnum"
          type="number"
          name="ISBN编号"
          label="ISBN编号"
          placeholder="ISBN编号"
          :rules="[{ required: true, message: '请输入ISBN编号' }]"
        />
        <van-field
          v-model="detailImg"
          name="详情图"
          label="详情图"
          placeholder="详情图"
          :rules="[{ required: true, message: '请填写详情图链接' }]"
        />
        <van-field
          v-model="type"
          type="number"
          name="书籍类别"
          label="书籍类别"
          placeholder="书籍类别"
          :rules="[{ required: true, message: '请输入书籍类别' }]"
        />
        <div style="margin: 16px 60vh auto 0;">
          <van-button round block type="info" color="#6375eb" native-type="submit">添加</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      img: "",
      price: "",
      company: "",
      city: "",
      idnum: "",
      detailImg: "",
      type: ""
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    onSubmit() {
      axios({
        url: url.addProduct,
        method: "post",
        data: {
          name: this.name,
          img: this.img,
          price: this.price,
          company: this.company,
          city: this.city,
          idnum: this.idnum,
          detailImg: this.detailImg,
          type: this.type
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.name = this.img = this.price = this.company = this.city = this.idnum = this.detailImg = this.type =
              "";
            this.$toast.success("添加成功");
          } else {
            this.$toast.fail("添加失败1");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("添加失败2");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.addbook {
  margin-bottom: 1vh;
  margin-right: 60vh;
  margin-left: 1vh;
}
</style>