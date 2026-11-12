import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SEGREDO_CORRETO = 'GOTHAM2026';

export default function App() {
  const [senha, setSenha] = useState('');
  const [cofreAberto, setCofreAberto] = useState(false);
  const [mensagem, setMensagem] = useState('');

  function verificarSenha() {
    Keyboard.dismiss();

    if (senha.trim().toUpperCase() === SEGREDO_CORRETO) {
      setCofreAberto(true);
      setMensagem('Cofre aberto! Parabéns!');
    } else {
      setCofreAberto(false);
      setMensagem('Segredo incorreto. Tente novamente.');
    }
  }

  function fecharCofre() {
    setSenha('');
    setCofreAberto(false);
    setMensagem('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.titulo}>COFRE DIGITAL</Text>
      <Text style={styles.descricao}>
        Descubra o segredo para desbloquear o cofre.
      </Text>

      <View style={styles.cofreContainer}>
        <Text style={styles.iconeCofre}>
          {cofreAberto ? '🔓' : '🔒'}
        </Text>
        <Text style={styles.estadoCofre}>
          {cofreAberto ? 'COFRE ABERTO' : 'COFRE FECHADO'}
        </Text>
      </View>

      {!cofreAberto && (
        <>
          <Text style={styles.instrucao}>
            Digite o segredo alfanumérico:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o segredo"
            placeholderTextColor="#888888"
            value={senha}
            onChangeText={(texto) => {
              setSenha(texto);
              setMensagem('');
            }}
            autoCapitalize="characters"
            autoCorrect={false}
            returnKeyType="done"
            onSubmitEditing={verificarSenha}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={verificarSenha}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>ABRIR COFRE</Text>
          </TouchableOpacity>
        </>
      )}

      {mensagem !== '' && (
        <Text
          style={[
            styles.mensagem,
            cofreAberto ? styles.sucesso : styles.erro,
          ]}
          accessibilityLiveRegion="polite"
        >
          {mensagem}
        </Text>
      )}

      {cofreAberto && (
        <TouchableOpacity
          style={styles.botao}
          onPress={fecharCofre}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>FECHAR COFRE</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.rodape}>Projeto desenvolvido em React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  titulo: {
    color: '#F5C400',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  descricao: {
    color: '#D0D0D0',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 35,
  },
  cofreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030',
    borderColor: '#F5C400',
    borderWidth: 2,
    borderRadius: 20,
    width: 220,
    height: 220,
    marginBottom: 35,
  },
  iconeCofre: {
    fontSize: 95,
    marginBottom: 8,
  },
  estadoCofre: {
    color: '#F5C400',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  instrucao: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    color: '#202020',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 15,
  },
  botao: {
    width: '100%',
    backgroundColor: '#F5C400',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    color: '#202020',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  mensagem: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 22,
  },
  sucesso: {
    color: '#70E090',
  },
  erro: {
    color: '#FF7777',
  },
  rodape: {
    position: 'absolute',
    bottom: 18,
    color: '#888888',
    fontSize: 12,
  },
});
