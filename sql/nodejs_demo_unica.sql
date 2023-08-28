/*
 Navicat Premium Data Transfer

 Source Server         : manh
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : nodejs_demo_unica

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 24/08/2023 16:00:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of post
-- ----------------------------
INSERT INTO `post` VALUES (1, 'Lập trình Android', 'Khóa học từ cơ bản đến nâng cao để xây dựng ứng dụng di động với Android ', '2023-08-22 15:28:36', '2023-08-22 15:28:36', 'TTH Nhất Nghệ');
INSERT INTO `post` VALUES (2, 'Cấu Trúc Dữ Liệu Và Giải Thuật C++', 'Môn Cấu Trúc Dữ Liệu Và Giải Thuật C++ là tiền đề để học tiếp các môn nâng cao của C++', '2023-08-23 09:56:55', '2023-08-23 09:56:55', 'Lê Nhật Tùng');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'chaubang.tran@gmail.com', '$2b$10$bpKs5WYgDDm2gHkZOTnpd.JzHSdVuCXhlNpvod', 'Trần', 'Ngọc Châu Băng', NULL, NULL);
INSERT INTO `users` VALUES (2, '', '$2b$10$HnaiptQrcFaqxFVjmGgxZOEfn5HoX7quI5yp87', '', '', NULL, NULL);
INSERT INTO `users` VALUES (3, '', '$2b$10$gAGoNAO/rXUUlEPzXZY.6ehb23t5y8hJglr4As', '', '', NULL, NULL);
INSERT INTO `users` VALUES (4, '', '$2b$10$Ah1Sl67xoBSz7E4rmxpXo.r1C7TA7nGppp4Sgk', '', '', NULL, NULL);
INSERT INTO `users` VALUES (5, '', '$2b$10$7Ind4GDSgQBuQzPSVZTi2ei4sJ2J.5zFZn5dlr', '', '', NULL, NULL);
INSERT INTO `users` VALUES (6, '', '$2b$10$88yKye3/CdZ6c/sA/U5HR.uqpoQxRGqq0ssTmL', '', '', NULL, NULL);
INSERT INTO `users` VALUES (7, '', '$2b$10$P4b1F.hPQ080iYYQXbxJ3uPFH48KF07IT99FmA', '', '', NULL, NULL);
INSERT INTO `users` VALUES (8, '', '$2b$10$bVf0W736JjTWJHLCTPF/zejLMjh47XsQZ.By.o', '', '', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
