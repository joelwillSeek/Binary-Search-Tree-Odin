import Node from "./Node";

let Binary_Search_Tree = (array) => {
  let tree_root = null;

  let inserting = (value) => {
    let new_node = Node(value);

    tree_root = inserting_node(tree_root, new_node);
  };

  let inserting_node = (root, new_node) => {
    if (root == null) {
      root = new_node;
      return root;
    } else if (root.data <= new_node.data)
      root.right = inserting_node(root.right, new_node);
    else if (root.data > new_node.data)
      root.left = inserting_node(root.left, new_node);

    return root;
  };

  let build_tree = () => {
    let unique_set = [...new Set(array)];

    for (let i = 0; i < unique_set.length; i++) {
      inserting(unique_set[i]);
    }
  };

  let in_order = () => {
    if (tree_root == null) return "tree empty";

    let array = [];

    return in_order_helper(tree_root, array);
  };

  let in_order_helper = (root, array) => {
    if (root == null) {
      return array;
    } else {
      in_order_helper(root.left, array);
      array.push(root.data);
      in_order_helper(root.right, array);
    }
    return array;
  };

  let pre_order = () => {
    if (tree_root == null) return "tree empty";

    let array = [];

    return pre_order_helper(tree_root, array);
  };

  let pre_order_helper = (root, array) => {
    if (root == null) {
      return array;
    } else {
      array.push(root.data);
      pre_order_helper(root.left, array);
      pre_order_helper(root.right, array);
    }

    return array;
  };

  let post_order = () => {
    if (tree_root == null) return "tree empty";

    let array = [];

    return post_order_helper(tree_root, array);
  };

  let post_order_helper = (root, array) => {
    if (root == null) {
      return array;
    } else {
      post_order_helper(root.left, array);
      post_order_helper(root.right, array);
      array.push(root.data);
    }

    return array;
  };

  /**
   *
   * @param {Number} value
   *
   */
  let delete_node_helper = (value, root) => {
    if (root == null) {
      return null;
    } else if (value < root.data) {
      root.left = delete_node_helper(value, root.left);
    } else if (value > root.data) {
      root.right = delete_node_helper(value, root.right);
    } else if (value == root.data) {
      if (root.right == null && root.left == null) {
        root = null;
      } else if (root.right != null) {
        root.data = successor(root.right);
        root.right = delete_node_helper(root.data, root.right);
      } else if (root.left != null) {
        root.data = predecessor(root.left);
        root.left = delete_node_helper(root.data, root.left);
      }
    }

    return root;
  };

  let delete_node = (value) => {
    if (tree_root == null) return;

    tree_root = delete_node_helper(value, tree_root);
  };

  let successor = (right_node) => {
    if (right_node.left != null) {
      return successor(right_node.left);
    } else if (right_node.left == null) {
      return right_node.data;
    }

    return right_node.data;
  };

  let predecessor = (left_node) => {
    if (left_node.right != null) {
      return successor(left_node.right);
    } else if (left_node.right == null) {
      return left_node.data;
    }

    return left_node.data;
  };

  let find_helper = (value, root) => {
    if (root == null) {
      return false;
    } else if (value < root.data) {
      return find_helper(value, root.left);
    } else if (value > root.data) {
      return find_helper(value, root.right);
    } else {
      return true;
    }
  };

  let find = (value) => {
    if (tree_root == null) return "empty";

    return find_helper(value, tree_root);
  };

  let is_balanced = () => {
    if (tree_root == null) return "empty";

    if (is_balanced_helper(tree_root) == -1) {
      return false;
    } else {
      return true;
    }
  };

  let is_balanced_helper = (root) => {
    if (root == null) {
      return 0;
    }

    let left_subtree = is_balanced_helper(root.left);
    if (left_subtree == -1) return -1;

    let right_subtree = is_balanced_helper(root.right);
    if (right_subtree == -1) return -1;

    if (Math.abs(left_subtree - right_subtree) > 1) {
      return -1;
    }

    return Math.max(left_subtree, right_subtree) + 1;
  };

  let rebalanced_tree = () => {
    if (tree_root == null) return "empty tree";

    //ordered nodes in an array
    let sorted_array = in_order_nodes();

    tree_root = balanced_tree_helper(sorted_array, 0, sorted_array.length - 1);
  };

  /**
   *
   * @param {Array<Node>} sorted_array
   * @param {Number} low
   * @param {Number} high
   * @returns {Node}
   */
  let balanced_tree_helper = (sorted_array, low, high) => {
    if (low > high) return null;

    let mid = low + (high - low) / 2;

    let root = sorted_array[Math.floor(mid)];

    root.left = balanced_tree_helper(sorted_array, low, mid - 1);
    root.right = balanced_tree_helper(sorted_array, mid + 1, high);

    return root;
  };

  let in_order_nodes = () => {
    if (tree_root == null) return "tree empty";

    let array = [];

    return in_order_nodes_helper(tree_root, array);
  };

  let in_order_nodes_helper = (root, array) => {
    if (root == null) {
      return array;
    } else {
      in_order_nodes_helper(root.left, array);
      array.push(root);

      in_order_nodes_helper(root.right, array);
    }

    return array;
  };

  let get_depth = (value) => {
    if (tree_root == null) return "empty tree";

    if (find(value) == false) return "no such value";

    if (value == null) return "noting inputted";

    return get_depth_helper(value, tree_root, 0);
  };

  let get_depth_helper = (value, root, level) => {
    if (value < root.data) {
      return get_depth_helper(value, root.left, ++level);
    } else if (value > root.data) {
      return get_depth_helper(value, root.right, ++level);
    } else if (value == root.data) {
      return level;
    }
  };

  let get_height = () => {
    if (tree_root == null) return "empty tree";

    return get_height_helper(tree_root);
  };

  let get_height_helper = (root) => {
    if (root == null) return 0;

    let left = get_height_helper(root.left);
    let right = get_height_helper(root.right);

    return Math.max(left, right) + 1;
  };

  let get_level_order = () => {
    if (tree_root == null) return "empty tree";

    let queue = [];

    let list_of_level = [];

    queue.push(tree_root);

    while (queue.length > 0) {
      let current = queue.shift();
      list_of_level.push(current.data);
      if (current.left != null) queue.push(current.left);
      if (current.right != null) queue.push(current.right);
    }

    return list_of_level;
  };

  build_tree();

  return {
    get_level_order,
    get_height,
    get_depth,
    rebalanced_tree,
    is_balanced,
    tree_root,
    inserting,
    in_order,
    pre_order,
    post_order,
    delete_node,
    find,
  };
};

export default Binary_Search_Tree;
