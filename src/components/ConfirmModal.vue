<template>
  <div class="modal">
    <div class="m-container">
      <div class="m-close">
       <button class="close" @click="$emit('close', false)">
         <font-awesome-icon class="i-close" icon="fa-solid fa-xmark" />
       </button>
      </div>
      <h3>Remoção de Registro</h3>
      <br>
      <p>Deseja Remover o conteúdo selecionado ?</p>
      <br>
      <div class="m-options">
        <button @click="$emit('close', false)" class="o-cancel"> <font-awesome-icon icon="fa-solid fa-xmark" /> Cancelar </button>
        <button @click="$emit('confirm')" class="o-confirm"> <font-awesome-icon icon="fa-solid fa-check" /> Confirmar </button>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal'
}
</script>
<style lang="scss">
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);

  .m-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: $grey;
    padding: 16px;
    position: relative;
    z-index: 2;
    .m-close {
      text-align: end;
      .close {
        border: none;
        color: $primary;
        cursor: pointer;
        border-radius: 50%;
        background-color: $grey;

        .i-close {
          padding: 6px;
          height: 18px;
          width: 18px;
        }
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
      }
    }
    .m-options {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      column-gap: 16px;

      button {
        border: none;
        height: 32px;
        cursor: pointer;
        letter-spacing: 2px;
        font-weight: 550;
        padding: 0 16px;
      }

      .o-cancel {
        background-color: transparent;

        &:hover  {
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .o-confirm {
        color: $grey;
        background-color: $success;
      }
    }
    .overlay {
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
