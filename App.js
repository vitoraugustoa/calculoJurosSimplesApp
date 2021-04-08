import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  useColorScheme,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [valorInicial, setValorInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [quantidadeMeses, setQuantidadeMeses] = useState("");
  const [valorCalculado, setValorCalculado] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function calcularJurosSimples() {
    if(valorInicial <= 0 && taxaJuros <= 0 && quantidadeMeses <= 0) {
      Alert.alert("Não se esqueça de preencher os valores");
      return
    }
    setValorCalculado(0);
    let juros = valorInicial * (taxaJuros / 100) * quantidadeMeses;
    let resultado = valorInicial + juros;
    setValorCalculado(resultado);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Text style={styles.titulo}>Juros Simples</Text>

          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Valor Inicial</Text>
              <TextInput 
                style={styles.input}
                returnKeyType="next" 
                keyboardType="numeric"
                value={valorInicial}
                onChangeText={(value) => setValorInicial(value)} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Taxa de Juros</Text>
              <TextInput 
                style={styles.input} 
                returnKeyType="next"
                keyboardType="numeric"
                value={taxaJuros}
                onChangeText={(value) => setTaxaJuros(value)} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Quantidade de Meses</Text>
              <TextInput 
                style={styles.input} 
                returnKeyType="next"
                keyboardType="numeric"
                value={quantidadeMeses}
                onChangeText={(value) => setQuantidadeMeses(value)} />
            </View>

            <Text style={styles.valorTotal}>{valorCalculado}</Text>

            <TouchableOpacity style={styles.button} onPress={calcularJurosSimples}>
              <Text style={styles.textButton}>Calcular Juros Simples</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  container: {
    height: '100%',
    padding: 20,
  },
  inputContainer: {
    alignItems: "flex-start",
    marginTop: 25,
    paddingLeft: 50,
    paddingRight: 50,
  },
  inputLabel: {
    fontSize: 17,
    color: "#686868"
  },
  input: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    width: '100%',
    paddingBottom: 1,
    fontSize: 20,
  },
  valorTotal: {
    fontSize: 30,
    color: "#13ac51",
    marginTop: 40,
    alignSelf: "center",
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: "#060611",
    width: "80%",
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: 'center',
  },
  textButton: {
    color: "#FFF",
    fontSize: 20,
    textTransform: 'uppercase'
  }
});

export default App;
