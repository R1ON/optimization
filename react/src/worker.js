self.onmessage = function (e) {
    // Прием данных от основного потока
    const { data } = e;
    
    // Выполнение какой-то логики
    const result = data * 2;
    
    setTimeout(() => {
        self.postMessage(result);
    }, 1000)
  };
  