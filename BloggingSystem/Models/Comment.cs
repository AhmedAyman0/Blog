using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BloggingSystem.Models
{
    public class Comment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        [Key]
        public int ID { get; set; } 


        [Required]
        public string Content { get; set; }

        public string Author { get; set; }

        public DateTime PubDate { get; set; } = DateTime.UtcNow;

        public bool IsAdmin { get; set; }

        public Post Post { get; set; }

        public int PostID { get; set; }
    }
}
