import { useState } from "react";
import { View,Text, TextInput,TouchableOpacity, StyleSheet,
} from "react-native";
import { FaSearch } from "react-icons/fa";


export default function App() {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);

  function adicionarProduto() {
    if (produto === "") return;

    setProdutos([...produtos, produto]);
    setProduto("");
  }

  function excluirProduto(index) {
    const novaLista = produtos.filter((_, i) => i !== index);
    setProdutos(novaLista);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Produtos</Text>

        <TextInput
          style={styles.input}
          placeholder="Escreva o produto..."
          value={produto}
          onChangeText={setProduto}
        />



        <TouchableOpacity style={styles.botao} onPress={adicionarProduto}>
          <Text style={styles.textoBotao}>ADICIONAR</Text>
        </TouchableOpacity>

        <Text style={styles.subtitulo}>Produtos listados:</Text>

        {produtos.map((item, index) => (
          <View style={styles.produto} key={index}>
            <Text style={styles.textoProduto}>{item}</Text>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => excluirProduto(index)}
            >
              <Text style={styles.textoExcluir}>EXCLUIR</Text>
            </TouchableOpacity>
          </View>
        ))}

        {produtos.length === 0 && (
          <Text style={styles.vazio}>Nenhum produto no carrinho.</Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c5fbd",
    alignItems: "center",
    fontFamily:'Gadget',
    gap:"20px"

  },


  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ced5de",
    textAlign: "center",
    marginBottom: 25,
    backgroundColor: "#07162b",
    width:'100%',
    padding:'20px',
       

  },

  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 13,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    color:'white',
    width:'300px'
  },

  botao: {
    backgroundColor: "#07162b",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    
  },

  produto: {
    backgroundColor: "#478ef0",
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    width:'300px'
  },

  textoProduto: {
    fontSize: 16,
    marginBottom: 8,
    
  },

  botaoExcluir: {
    backgroundColor: "#ae1113",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
  },

  textoExcluir: {
    color: "#fff",
    fontWeight: "bold",
  },

  vazio: {
    color: "#bef30094",
    textAlign: "center",
    padding: 20,
    fontWeight:'bold'
  },
});
