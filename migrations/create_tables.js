"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Campaign", {
      campaign_id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      campaign_name: {
        type: Sequelize.STRING(250),
      },
      technology_type: {
        type: Sequelize.STRING(250),
      },
      campaign_description: {
        type: Sequelize.STRING(250),
      },
      email_distribution: {
        type: Sequelize.STRING(250),
      },
      createdby: {
        type: Sequelize.STRING(50),
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      startDateTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      endDateTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("Campaign_Status", {
      campaign_id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      campaign_status: {
        type: Sequelize.STRING(50),
      },
      updatedBy: {
        type: Sequelize.STRING(50),
      },
      updatedDateTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
