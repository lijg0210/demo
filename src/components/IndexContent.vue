<template>
  <el-container>
    <el-aside width="240px">
      <IndexContentList></IndexContentList>
    </el-aside>
    <el-container>
      <el-header style="padding: 0;">
        <IndexContentNav></IndexContentNav>
      </el-header>
      <el-main style="margin-left: 50px;">
         <!-- 运行情况表单 -->
        <div class="runningCondition">
          <Title class="title">
            <span>运行单位情况</span>
          </Title>
          <el-form :model="running" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="单位名称" prop="name" class="elFormItem">
              <el-input v-model="running.name" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="单位性质" prop="notNull" class="elFormItem">
              <el-input v-model="running.nature" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="隶属关系" prop="notNull" class="elFormItem">
              <el-input v-model="running.relation" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="单位地址" prop="notNull" class="elFormItem">
              <el-input v-model="running.site" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="邮政编码" prop="notNull" class="elFormItem">
              <el-input v-model="running.post" class="elInput" maxLength="6"></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="notNull" class="elFormItem">
              <el-input v-model="running.user" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone" class="elFormItem">
              <el-input v-model="running.phone" maxLength="11" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="传真" prop="notNull" class="elFormItem">
              <el-input v-model="running.fax" class="elInput"></el-input>
            </el-form-item>
            <el-form-item label="E-mail" prop="eMail" class="elFormItem">
              <el-input v-model="running.eMail" class="elInput"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <!-- 项目表单 -->
        <div class="project">
          <Title class="title">
            <span>建设项目情况</span>
          </Title>
          <el-form :model="running" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div style="overflow: hidden">
              <el-form-item label="项目名称" prop="" class="elFormItem">
              <el-input v-model="running.project" class="elInput"></el-input>
              </el-form-item>
              <el-form-item label="项目行业" prop="" class="elFormItem">
                <el-input v-model="running.industry" class="elInput"></el-input>
              </el-form-item>
              <el-form-item label="建设投资" prop="" class="elFormItem">
                <el-input v-model="running.investment" class="elInput"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="环境影响评价报告书（表）批复及文件号" label-width="150px" class="textarea">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="running.textarea">
              </el-input>
            </el-form-item>
            
          </el-form>
        </div>
        <div class="submitAll">
          <el-button @click="submitForm(running)" size="small" type="success">保存</el-button>
          <el-button @click="resetForm(running)" size="small">重置</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {Container, Aside, Header, Main, Form, FormItem, Input, Button} from 'element-ui'
import IndexContentList from './IndexContentList'
import IndexContentNav from './IndexContentNav'
import Title from './Title'
export default {
  name: 'IndexContent',
  data() {
    let validateName = (rule, value, callback) => {
      console.log(value)
      if (!value) {
        callback(new Error('您的输入不能为空'));
      }else callback();
    };
    let validatePhone = (rule, value, callback) => {
      if(!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)){
        callback(new Error('您输入的手机号格式不正确，请查看'));
      }else callback();
    };
    let validateEMail = (rule, value, callback) => {
      if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
        callback(new Error('您输入的邮箱格式不正确，请查看'));
      } else callback();
    };
    return {
      running: {
        // name: '',
        // nature: '',
        // relation: '',
        // site: '',
        // post: '',
        // user: '',
        // phone: '',
        // fax: '',
        // eMail: '',
        // project: '',
        // industry: '',
        // investment: '',
        // textarea: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        eMail: [
          { validator: validateEMail, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(running){
      alert(JSON.stringify(running))
      console.log(running)
    },
    resetForm(running){
      this.running = {}
    }
  },
  components: {
    'el-container': Container,
    'el-aside': Aside,
    'el-header': Header,
    'el-main': Main,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-button': Button,
    IndexContentList,
    IndexContentNav,
    Title
  }
};
</script>

<style scoped lang="stylus">
.title
  margin-bottom 20px
.demo-ruleForm
  overflow hidden
  font-weight 700
  .elFormItem
    float left
    width 41%
    &:nth-of-type(2n+1)
      margin-left 50px
.textarea
  width 87%
.submitAll 
  position fixed
  bottom 100px
  right 20px
</style>