<template>
    <div class="form">

        <form action="" @submit.prevent="handleSubmit">
            
            <label for="email">Email</label>
            <input type="email" placeholder="Email" required v-model="email" >
            
            <label for="password">Password</label>
            <input type="password" placeholder="password" required v-model="password" >
            <div class="passwordError" v-if="passwordError">{{ passwordError }}</div>

            <label for="">Role: </label>
            <select name="role" id="role" v-model="role">
                <option value="developer" selected>Developer</option>
                <option value="marketer">Marketer</option>
            </select>
            <div class="skills">
                <label for="skills">Skills</label>
                <input type="text" name="skills" id="skills" v-model="tempSkill" @keyup="addSkill">
                <div v-for="skill in skills" :key="skill" class="pill">
                    <span @click="deleteSkill(skill)">{{ skill }}</span>
                </div>
            </div>
            <div class="terms">
                <input type="checkbox" name="terms" id="terms" required v-model="terms">
                <label for="terms">Terms and conditions</label>
            </div>
            <!-- <div>
                <input type="checkbox" value="pepe" v-model="names">
                <label for="">Pepe</label>
            </div>
            <div>
                <input type="checkbox" value="juan" v-model="names">
                <label for="">Juan</label>
            </div>
            <div>
                <input type="checkbox" value="manolo" v-model="names">
                <label for="">Manolo</label>
            </div>                 -->
            <div class="text-center">
                <button class="submit">Create an account</button>
            </div>
        </form>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms: {{ terms }}</p>
        <p>Names: {{ names }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: 'diwilo@example.com  ',
            password: '',
            role: 'developer',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e){
            const key = e.key
            if(key === ',' && this.tempSkill) {
                const tempSkill = this.tempSkill.replace(',', '')
                if(!this.skills.includes(tempSkill)){
                    this.skills.push(tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill != item
            })
        },
        handleSubmit(){
            this.passwordError = this.password.length > 5 ? '' : 'The password must be at least 6 chars long'

            if(!this.passwordError) {
                const data = {
                    email: this.email,
                    password: this.password,
                    role: this.role,
                    terms: this.terms,
                    names: this.names,
                    skills: this.skills
                }
                console.dir(data)
            }


            
        }
    }
}
</script>
<style>
    .passwordError{
        color: red;
    }
    .text-center{
        text-align: center;
    }
    .form{
        width: 400px;
        background: white;
        border-radius: 10px;
        padding: 50px 130px;
        min-height: 200px;
    }
    form{
        text-align: left;
    }
    label {
        color: #afafaf;
        width: 100%;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 700;
    }
    input, select{
        width: 100%;
        border: none;
        border-bottom: 1px solid #aaa;
        padding: 17px 6px;
        background: white;
        margin-bottom: 36px;
        font-size: 18px;
    }
    input:focus-visible, select:focus-visible{
        outline: none;
    }
    input[type="checkbox"]{
        display: inline-block;
        padding: 0;
        margin: 0 10px 0 0;
        width: auto;
    }
    .pill{
        display: inline-block;
        padding: 6px;
        background-color: #cbcbcb;
        margin-right: 6px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 700;
        color: #5f5f5f;
    }
    .submit{
        cursor: pointer;
        background-color: #41B883;
        padding: 15px;
        font-weight: 700;
        text-align: center;
        color: white;
        border:none;
        margin-top: 10px;
        border-radius: 30px;
    }
</style>