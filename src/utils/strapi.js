
/**
 * 
 * @param {String} name 
 * @param {'a' | 'b' | 'c'} value 
 */
export const Filter = (name, value) => {
}


/**
 * 
 * @param {String} name - 字段名
 * @param {'eq' | 'eqi' | 'ne' | 'nei' 'contains' | 'notContains' | 'containsi' | 'notContainsi' |
*  'lt' | 'lte' | 'gt' | 'gte' | 'in' | 'notIn' | 'null' | 'notNull' | 'between' | 'startsWith' | 'startsWithi' | 'endsWith' | 'endsWithi' | 'or' | 'and' | 'not'} op - 筛选类型
*  - 'eq': 等于
*  - 'eqi': 等于（不区分大小写）
*  - 'ne': 不等于
*  - 'nei': 不等于（不区分大小写）
*  - 'contains': 包含
*  - 'notContains': 不含
*  - 'containsi': 包含（不区分大小写）
*  - 'notContainsi': 不包含（不区分大小写）
*  - 'lt': 小于
*  - 'lte': 小于或等于
*  - 'gt': 大于
*  - 'gte': 大于或等于
*  - 'in': 包含在数组中
*  - 'notIn': 不包含在数组中
*  - 'null': 为空
*  - 'notNull': 不为空
*  - 'between': 在...区间
*  - 'startsWith': 以...开头
*  - 'startsWithi': 以...开头（不区分大小写）
*  - 'endsWith':  以...结尾
*  - 'endsWithi': 以...结尾（不区分大小写）
*  - 'or': 或者
*  - 'and': 并且
*  - 'not': 不
* @param {*} value - 筛选值
*/
export const filters = (arr) => {

    console.log(arr)

    // console.log([new Filter('xxxx', 'a')])
    // return `filters[${name}][$${op}]: $value`
}

