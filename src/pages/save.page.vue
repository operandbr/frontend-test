<template>
  <main id="save-page">
    <div class="card  mb-4 mt-4">
      <div class="card-body">
        <section class="row mb-4 mt-4">
          <div class="col-4">
            <router-link to="/lista" class="btn btn-primary">
              Voltar
            </router-link>
          </div>
          <div class="col-8 text-end">
            <h3>
              {{ form.id ? "Editar usuário" : "Cadastre um novo usuário" }}
            </h3>
          </div>
        </section>

        <section class="row mt-4 mb-4">
          <div class="col-12">
            <form @submit.prevent="handleSubmit">
              <op-input
                label="Nome Completo"
                type="text"
                v-model="form.nome"
                id="nome"
                :rules="[
                  {
                    valid: handleRule('nome', 'required'),
                    message: 'Campo Obrigatório',
                  },
                  {
                    valid: handleRule('nome', 'invalid'),
                    message: 'Nome Inválido',
                  },
                ]"
              />

              <div class="row">
                <div class="col-12 col-md-3">
                  <op-input
                    label="Idade"
                    type="tel"
                    v-model="form.idade"
                    v-mask="'##'"
                    id="idade"
                    :rules="[
                      {
                        valid: handleRule('idade', 'required'),
                        message: 'Campo Obrigatório',
                      },
                      {
                        valid: handleRule('idade', 'between'),
                        message: 'Insira uma idade entre 18 e 99 anos',
                      },
                    ]"
                  />
                </div>
                <div class="col-12 col-md-3">
                  <op-input
                    label="Celular"
                    type="tel"
                    ref="celular"
                    v-model="form.celular"
                    v-mask="handleMaskCelular()"
                    :rules="[
                      {
                        valid: handleRule('celular', 'required'),
                        message: 'Campo Obrigatório',
                      },
                      {
                        valid: handleRule('celular', 'invalid'),
                        message: 'Digite um celular válido',
                      },
                    ]"
                    id="idade"
                  />
                </div>
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-3"></div>
              </div>
              <div class="form-group text-end">
                <button type="submit" class="btn btn-primary">Salvar</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import {
  required,
  minLength,
  between,
  numeric,
} from 'vuelidate/lib/validators';

import { isCellPhone, name } from '../helper/validator';
import _input from '../components/forms/input.form';

export default {
  name: 'save',
  components: {
    'op-input': _input,
  },
  data() {
    return { form: {} };
  },

  async created() {
    const { id } = this.$route.params;
    if (id) {
      const usuario = await this.$store.dispatch('usuario/findById', id);
      this.form = usuario;

      // Force um update no v-mask.
      this.$nextTick(() => {
        this.$refs.celular.$emit('input');
      });
    }
  },

  validations: {
    form: {
      nome: {
        required,
        minLength: minLength(4),
        invalid: name,
      },
      idade: {
        required,
        numeric,
        between: between(18, 99),
      },
      celular: {
        required,
        invalid: isCellPhone,
      },
    },
  },

  methods: {
    handleRule(field, rule) {
      if (!this.$v.form[field].required && !this.$v.form[field].$model) {
        return true;
      }

      if (!rule) {
        return this.$v.form[field].$invalid && this.$v.form[field].$model;
      }

      return this.$v.form[field][rule];
    },
    handleMaskCelular() {
      return (this.form.celular || '').length === 15
        ? '(##) #####-####'
        : '(##) ####-####';
    },
    async handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return this.$swal('Preencha os campos que estão faltando');
      }

      const loader = this.$loading.show();
      try {
        const body = { ...this.form };

        body.celular = body.celular.replace(/\D/gi, '');

        await this.$store.dispatch('usuario/save', body);
        this.$swal('Usuário salvo com sucesso.');
      } catch (error) {
        this.$swal('Houve um problema ao salvar esse usuário.');
      } finally {
        loader.hide();
      }

      return true;
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
