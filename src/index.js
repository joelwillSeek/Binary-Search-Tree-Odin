import Binary_Search_Tree from "./Binary_Search_Tree";

let binary_search_tree = Binary_Search_Tree([
  5, 9, 9, 1, 6, 7, 4, 2, 10, 8, 3, 2,
]);

console.log("level order", binary_search_tree.get_level_order());

console.log("height", binary_search_tree.get_height(7));

console.log("check if balanced", binary_search_tree.is_balanced());
binary_search_tree.rebalanced_tree();
console.log("check if balanced", binary_search_tree.is_balanced());

let binary_search_tree_balanced = Binary_Search_Tree([
  35, 48, 79, 21, 13, 29, 32,
]);

let binary_search_tree_unbalanced = Binary_Search_Tree([
  35, 48, 21, 13, 29, 32,
]);

console.log("check if balanced", binary_search_tree_balanced.is_balanced());

console.log("check if balanced", binary_search_tree_unbalanced.is_balanced());

console.log("in order", binary_search_tree.in_order());

console.log("post order", binary_search_tree.post_order());

console.log("pre order", binary_search_tree.pre_order());
