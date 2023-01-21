const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("botinfo").setDescription("Displays info about bot"),
	run: async ({ client, interaction }) => {
		return await interaction.editReply(`${client['users']}`)
	},
}

//interaction.member.voice.channel