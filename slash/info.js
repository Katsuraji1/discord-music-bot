const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("info").setDescription("Displays info about the currently playing song and info bot"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Нихуя нет в очереди")

/* 		let bar = queue.createProgressBar({
			queue: false,
			length: 19,
		}) */

        const song = queue.current

		await interaction.editReply({
			embeds: [new MessageEmbed()
			.setDescription('Версия 1.0.0')]
		})

		await interaction.editReply({
			embeds: [new MessageEmbed()
            .setThumbnail(song.thumbnail)
            .setDescription(`Сейчас играет [${song.title}](${song.url})\n\n`)
        ],
		})
	},
}
