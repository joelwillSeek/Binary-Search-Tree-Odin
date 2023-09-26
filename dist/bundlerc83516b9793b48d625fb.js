/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Binary_Search_Tree.js":
/*!***********************************!*\
  !*** ./src/Binary_Search_Tree.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");


let Binary_Search_Tree = (array) => {
  let tree_root = null;

  let inserting = (value) => {
    let new_node = (0,_Node__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

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

    pre_order_helper(root);
  };

  let pre_order_helper = (root) => {
    if (root == null) {
      return;
    } else {
      console.log(root);
      pre_order_helper(root.left);
      pre_order_helper(root.right);
    }
  };

  let post_order = () => {
    if (tree_root == null) return "tree empty";

    post_order_helper(tree_root);
  };

  let post_order_helper = (root) => {
    if (root == null) {
      return;
    } else {
      post_order_helper(root.left);
      post_order_helper(root.right);
      console.log(root.data);
    }
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

  let balanced_tree = () => {
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
    list_of_level,
    get_height,
    get_depth,
    balanced_tree,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Binary_Search_Tree);


/***/ }),

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Node = (value) => {
  let data = value;
  let left = null;
  let right = null;

  return { data, left, right };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Binary_Search_Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binary_Search_Tree */ "./src/Binary_Search_Tree.js");


let binary_search_tree = (0,_Binary_Search_Tree__WEBPACK_IMPORTED_MODULE_0__["default"])([
  5, 9, 9, 1, 6, 7, 4, 2, 10, 8, 3, 2,
]);

console.log(binary_search_tree.list_of_level());

// console.log(binary_search_tree.get_height());

// console.log(binary_search_tree.get_height(7));

// console.log(binary_search_tree.is_balanced());
// binary_search_tree.balanced_tree();
// console.log(binary_search_tree.is_balanced());

// let binary_search_tree_balanced = Binary_Search_Tree([
//   35, 48, 79, 21, 13, 29, 32,
// ]);

// let binary_search_tree_unbalanced = Binary_Search_Tree([
//   35, 48, 21, 13, 29, 32,
// ]);

// console.log(binary_search_tree_balanced.is_balanced());

// console.log(binary_search_tree_unbalanced.is_balanced());

})();

/******/ })()
;
//# sourceMappingURL=bundlerc83516b9793b48d625fb.js.map