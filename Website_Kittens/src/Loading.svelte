<script>

</script>

<main>
    <div class="content">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
</main>

<style>

main{
    background-color: #131313;
    padding-top: 60px;
    padding-left: 100px;
    padding-right: 100px;
    height: 87.3vh;
    max-width: 100vw - 440px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 256px;
  height: 256px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 256px;
  height: 256px;
  margin: 32px;
  border: 32px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>