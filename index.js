
  function mostrar_motivacao() {
    const texto_entrada = document.getElementById("motivacional-input");
    const texto_recebido = texto_entrada.value;
    const div_motivacao = document.getElementById("texto-output");
    div_motivacao.innerHTML = `Sinta-se motivado(a) por ${texto_recebido}!`;
    
  }

 
  function mostrar_displey() {
    const data_texto = document.getElementById('texto-data');
    const hora_visor = document.getElementById('horas-id');
    const minutos_visor = document.getElementById('minutos-id');
    const segundos_visor = document.getElementById('segundos-id');
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const dia = data.getDate();
    const mes = data.toLocaleString('pt-BR', { month: 'long' });
    const ano = data.getFullYear();
    const dataFormatada = `${dia} de ${mes} de ${ano}`;
    data_texto.innerHTML = dataFormatada;
    hora_visor.innerHTML = hora;
    minutos_visor.innerHTML = minutos;
    segundos_visor.innerHTML = segundos;
}
mostrar_displey(); // Chama a função uma vez para exibir o tempo atual imediatamente
setInterval(mostrar_displey, 1000); // Chama a função a cada segundo para atualizar o tempo

