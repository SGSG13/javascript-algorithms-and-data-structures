/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {_Node|null} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        const result = [];
        
        function dfs(node){
            if(!node) return;
            result.push(node.val);
            result.push(node.children.length);
            for(let i = 0; i < node.children.length; i++){
                dfs(node.children[i]);
            }
        }
        dfs(root);
        return result.join(",");
    };
	
    /** 
     * @param {string} data 
     * @return {_Node|null}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        const values = data.split(",");
        let index = 0;
        
        function dfs(){
            const node = new Node(values[index++], []);
            const size = values[index++];
            for(let i = 0; i < size; i++){
                node.children.push((dfs()))
            }
            return node
        }
        
       return dfs(data.split(","));
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));