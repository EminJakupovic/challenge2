import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, } from 'react-native';

type Post = {
    id: number;
    title: string;
    body: string;
};

export default function PostsScreen() {
    const  [posts, setPosts] = useState<Post[]>([]);
    const  [loading, setLoading] = useState(true);
    const  [selectedPost, setSelectedPost] = useState<Post / null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then (data => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

if (loading) {
    return <ActivityIndicator size="large" />; 
    }

return (
<View style={styles.container}>
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <PostCard 
                    post={item}
                    onPress={() => setSelectedPost(item)}
                />           )}
            />
</View>
        );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 8,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  id: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});